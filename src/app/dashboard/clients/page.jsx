'use server';
import ClientWrapper from '@/features/clients/components/clientWrapper';
import { ClientShowCards } from '@/features/clients/components/clientShowCards';
import { auth } from '@/lib/auth';
import { Suspense } from 'react';

function SkeletonCard() {
  return (
    <div className="border rounded p-4 animate-pulse">
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
      <div className="h-4 bg-gray-300 rounded w-full"></div>
    </div>
  );
}

export default async function ClientsPage() {
  const session = await auth();
  const id = session?.user?.id;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Clients</h1>
      <ClientWrapper userId={id} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Suspense fallback={<SkeletonCard />}>
          <ClientShowCards userId={id} />
        </Suspense>
      </div>
    </div>
  );
}
