import { auth } from '@/lib/auth';
import { SignOut } from '@/components/SingOutButton';
import Image from 'next/image';

export default async function Dashboard() {
  const session = await auth();

  return (
    <div className=" bg-zinc-50 font-sans dark:bg-blue-900 flex flex-col justify-center">
      <h1>Dashboard</h1>
      <p>Welcome, {session?.user?.name}</p>
      <img
        src={session?.user?.image}
        alt="Imagen usuario"
        className="rounded-full w-16 h-16"
      />
      <SignOut />
    </div>
  );
}
