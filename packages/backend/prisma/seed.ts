import { PrismaClient } from '@prisma/client';

import { createArticle, createComment, createTag, createUser } from './factories'

const prisma = new PrismaClient();

async function seed() {
  const numTags = 5;
  const numUsers = 5;
  const numArticles = 10;

  await prisma.tag.createMany({
    data: Array.from({ length: numTags }, createTag),
  });
  await prisma.user.createMany({
    data: Array.from({ length: numUsers }, createUser),
  });
  const users = await prisma.user.findMany();
  const authorUsernames = users.map((user) => user.username);

  await prisma.article.createMany({
    data: authorUsernames.flatMap((authorUsername) =>
      Array.from({ length: numArticles }, () => createArticle(authorUsername))
    ),
  });
  const articles = await prisma.article.findMany();
  const articleSlugs = articles.map((article) => article.slug);

  await prisma.comment.createMany({
    data: authorUsernames.flatMap((authorUsername) =>
      articleSlugs.map((articleSlug) => createComment(authorUsername, articleSlug))
    ),
  });

  console.log('Seed data created successfully');
}

seed()
  .catch((error) => {
    console.error('Error seeding data:', error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
