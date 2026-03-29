import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/generated/prisma/index.js';

const connectionString = process.env.DATABASE_URL;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

async function main() {
  const user = await prisma.user.create({
    data: {
      name: 'John Doe',
      email: 'john21@gmail.com',
      password: 'password123',
    },
  });

  const client = await prisma.client.create({
    data: {
      name: 'Acme Corporation',
      email: 'contact@acme.com',
      company: 'Acme Corporation',
      userId: user.id,
    },
  });

  const project = await prisma.project.create({
    data: {
      name: 'Project Alpha',
      status: 'IN_PROGRESS',
      budget: 10000,
      clientId: client.id,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
