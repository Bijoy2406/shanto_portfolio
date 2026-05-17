import { redirect } from 'next/navigation';
import AdminForm from './AdminForm';
import { loadPortfolio } from './actions';
import { Agentation } from 'agentation';

export const dynamic = 'force-dynamic';

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const secret = typeof params.secret === 'string' ? params.secret : '';

  if (!secret || secret !== process.env.ADMIN_SECRET) {
    redirect('/');
  }

  const data = await loadPortfolio();

  return (
    <main className="max-w-5xl mx-auto px-4 md:px-6 py-8 pb-24">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-on-surface">Portfolio Admin</h1>
        <p className="text-sm text-on-surface-variant mt-1">
          Edit every page below. Changes go live immediately after saving.
        </p>
      </header>

      {process.env.NODE_ENV === "development" && (
        <div className="flex justify-center mb-6">
          <div className="rounded-full border-2 border-primary overflow-hidden inline-block">
            <Agentation />
          </div>
        </div>
      )}

      <AdminForm initialData={data} secret={secret} />
    </main>
  );
}
