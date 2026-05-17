'use client';

import { useState, useRef } from 'react';
import { uploadImageAction, deleteBlobAction } from '../actions';

interface Props {
  value: string | undefined;
  onChange: (url: string | undefined) => void;
  secret: string;
  folder: string;
  label?: string;
  className?: string;
  previewClassName?: string;
  allowDelete?: boolean;
}

export default function ImageUploader({
  value,
  onChange,
  secret,
  folder,
  label,
  className = '',
  previewClassName = 'w-32 h-32 rounded-lg object-cover border border-outline-variant',
  allowDelete = true,
}: Props) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError(null);

    const fd = new FormData();
    fd.set('file', file);
    fd.set('secret', secret);
    fd.set('folder', folder);

    const res = await uploadImageAction(fd);
    setUploading(false);
    if (e.target) e.target.value = '';

    if (!res.success) {
      setError(res.error);
      return;
    }
    onChange(res.url);
  }

  async function handleDelete() {
    if (!value) return;
    if (!confirm('Delete this image permanently?')) return;
    const prevUrl = value;
    onChange(undefined);
    await deleteBlobAction(secret, prevUrl);
  }

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {label && (
        <label className="text-sm font-semibold text-on-surface">{label}</label>
      )}
      {value ? (
        <div className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={value} alt="Preview" className={previewClassName} />
          <div className="flex flex-col gap-2">
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              disabled={uploading}
              className="text-xs px-3 py-1.5 rounded border border-outline-variant bg-surface-container-low hover:bg-surface-container text-on-surface"
            >
              Replace
            </button>
            {allowDelete && (
              <button
                type="button"
                onClick={handleDelete}
                className="text-xs px-3 py-1.5 rounded border border-red-300 text-red-700 hover:bg-red-50"
              >
                Delete
              </button>
            )}
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={uploading}
          className="flex items-center justify-center px-4 py-3 rounded border-2 border-dashed border-outline-variant text-on-surface-variant text-sm hover:bg-surface-container-low"
        >
          {uploading ? 'Uploading…' : 'Upload image'}
        </button>
      )}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFile}
      />
      {error && <p className="text-xs text-red-700">{error}</p>}
    </div>
  );
}
