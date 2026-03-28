import Counter from '@/components/Counter';
import { prisma } from '@/lib/prisma';

export default async function Dashboard() {
  const user = await prisma.user.findFirst();

  return (
    <div className=" bg-zinc-50 font-sans dark:bg-blue-900">
      <h1>Dashboard</h1>
      <Counter />
      <h2>
        Welcome, {user.name}! Your email is {user.email}.
      </h2>
    </div>
  );
}
