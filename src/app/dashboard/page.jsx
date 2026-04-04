import { auth } from '@/lib/auth';
import Image from 'next/image';

export default async function Dashboard() {
  const session = await auth();

  return (
    <div className=" bg-zinc-50 font-sans flex flex-col justify-center text-slate-900">
      <h1>Dashboard</h1>
      <p>Welcome, {session?.user?.name}</p>
      {session?.user?.image ? (
        <Image
          src={session.user.image}
          alt="Imagen usuario"
          width={64}
          height={64}
          className="rounded-full w-16 h-16"
        />
      ) : null}
    </div>
  );
}
