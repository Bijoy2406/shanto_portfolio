'use server';

import { kv } from '@vercel/kv';
import { put, del } from '@vercel/blob';
import { revalidatePath } from 'next/cache';
import type { PortfolioData, ActionResult } from './types';
import { mergeWithDefaults } from './defaults';

export type { PortfolioData, ActionResult } from './types';

const KV_KEY = 'portfolio_data';

function authorize(secret: unknown): secret is string {
  return typeof secret === 'string' && secret === process.env.ADMIN_SECRET;
}

export async function loadPortfolio(): Promise<PortfolioData> {
  const stored = await kv.get<Partial<PortfolioData>>(KV_KEY);
  return mergeWithDefaults(stored);
}

export async function savePortfolio(
  secret: string,
  data: PortfolioData,
): Promise<ActionResult> {
  if (!authorize(secret)) {
    return { success: false, error: 'Unauthorized' };
  }
  try {
    await kv.set<PortfolioData>(KV_KEY, data);
    revalidatePath('/', 'layout');
    return { success: true };
  } catch (err) {
    console.error('[admin] savePortfolio error:', err);
    return { success: false, error: 'Failed to save. Check server logs.' };
  }
}

export type UploadResult =
  | { success: true; url: string }
  | { success: false; error: string };

export async function uploadImageAction(
  formData: FormData,
): Promise<UploadResult> {
  const secret = formData.get('secret');
  if (!authorize(secret)) {
    return { success: false, error: 'Unauthorized' };
  }
  const file = formData.get('file');
  const folder = (formData.get('folder') as string | null) ?? 'misc';

  if (!(file instanceof File) || file.size === 0) {
    return { success: false, error: 'No file provided' };
  }
  try {
    const blob = await put(`${folder}/${Date.now()}-${file.name}`, file, {
      access: 'public',
    });
    return { success: true, url: blob.url };
  } catch (err) {
    console.error('[admin] uploadImageAction error:', err);
    return { success: false, error: 'Failed to upload image.' };
  }
}

export async function deleteBlobAction(
  secret: string,
  url: string,
): Promise<ActionResult> {
  if (!authorize(secret)) {
    return { success: false, error: 'Unauthorized' };
  }
  if (!url || !url.includes('public.blob.vercel-storage.com')) {
    return { success: true };
  }
  try {
    await del(url);
    return { success: true };
  } catch (err) {
    console.error('[admin] deleteBlobAction error:', err);
    return { success: false, error: 'Failed to delete blob.' };
  }
}
