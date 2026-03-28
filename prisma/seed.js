import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../src/generated/prisma/index.js';

const connectionString = process.env.DATABASE_URL;
const adapter = new PrismaPg({ connectionString });

const prisma = new PrismaClient({ adapter });

async function main() {
  await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alicemx@gmail.com',
      posts: {
        create: [
          {
            title: 'Hello World',
            content: 'This is my first post',
            published: true,
          },
          {
            title: 'Prisma is great',
            content: 'I love using Prisma with Next.js',
            published: true,
          },
        ],
      },
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
