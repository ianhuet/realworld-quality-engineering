import { faker } from '@faker-js/faker'
import { Prisma } from '@prisma/client'

import { hashPassword } from "../src/utils/hashPasswords";

const createArticle = (authorUsername: string) => ({
  authorUsername,
  body: faker.lorem.paragraphs(3),
  description: faker.lorem.sentences(2),
  slug: faker.helpers.slugify(faker.lorem.words(3)),
  title: faker.lorem.words(3),
});

const createComment = (authorUsername: string, articleSlug: string) => ({
  articleSlug,
  authorUsername,
  body: faker.lorem.sentences(1),
});

const createTag = () => ({
  tagName: faker.lorem.word(),
});

const createUser = (): Prisma.UserCreateManyInput => ({
  bio: faker.lorem.sentences(2),
  email: faker.internet.email(),
  image: faker.image.avatar(),
  password: hashPassword('password'),
  username: faker.internet.userName(),
});

export {
  createArticle,
  createComment,
  createTag,
  createUser,
}
