import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Crear usuarios
  const user1 = await prisma.user.upsert({
    where: { email: 'user1@example.com' },
    update: {},
    create: {
      username: 'UserOne',
      email: 'user1@example.com',
      password: 'hashedpassword1',
      dni: '49153555G' // Asegúrate de usar hashes en producción
    },
  })

  const user2 = await prisma.user.upsert({
    where: { email: 'user2@example.com' },
    update: {},
    create: {
      username: 'UserTwo',
      email: 'user2@example.com',
      password: 'hashedpassword2',
      dni: '49153552G' // Asegúrate de usar hashes en producción
    },
  })

  // Crear una subasta
  const auction = await prisma.auction.create({
    data: {
      title: 'Subasta de un iPhone 15',
      description: 'iPhone 15 nuevo, sin abrir.',
      startingBid: 500,
      currentBid: 600,
      endTime: new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000), // 7 días desde ahora
      ownerId: user1.id,
    },
  })

  // Crear pujas bids)
  await prisma.bid.createMany({
    data: [
      { amount: 550, userId: user2.id, auctionId: auction.id },
      { amount: 600, userId: user1.id, auctionId: auction.id },
    ],
  })

  console.log('✅ Seeding completed!')
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
