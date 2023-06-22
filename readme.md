https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-postgresql

npm init -y

npm install prisma typescript ts-node @types/node --save-dev

npx tsc --init

npx prisma

npx prisma init

DATABASE_URL="mysql://root:password@localhost:3306/mydb"

npx prisma migrate dev --name init

npm install @prisma/client

npx prisma migrate dev

npx prisma db push

# read data

  const allUsers = await prisma.user.findMany()
  
  console.log(allUsers)

npx ts-node index.ts

# Write data into the database







