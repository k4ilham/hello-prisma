import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  // Run inside `async` function
  // const allUsers = await prisma.user.findMany()
  // console.log(allUsers);





  // Run inside `async` function
  // const allUsers = await prisma.user.findMany({
  //   include: { posts: true },
  // });
  // console.log(allUsers);




  // Run inside `async` function
  // const filteredPosts = await prisma.post.findMany({
  //   where: {
  //     OR: [
  //       { title: { contains: 'prisma' } },
  //       { content: { contains: 'prisma' } },
  //     ],
  //   },
  // })
  // console.log(filteredPosts);


 // Run inside `async` function
  // const user = await prisma.user.create({
  //   data: {
  //     name: 'Alice2',
  //     email: 'alice2@prisma.io',
  //     posts: {
  //       create: { title: 'Join us for Prisma Day 2020' },
  //     },
  //   },
  // })
  // console.log(user);


  // Run inside `async` function
  const post = await prisma.post.update({
    where: { id: 3 },
    data: { published: true },
  })
  console.log(post);





}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })