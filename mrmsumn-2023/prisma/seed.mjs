import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      username: "koong hiap",
      email: "koonghiap@wisanggeni.mrms.ac.id",
      password: await bcrypt.hash("wisanggeni_koonghiap", 10),
      type: 1,
    },
  });

  await prisma.user.create({
    data: {
      username: "axel ferdinand",
      email: "axel@wisanggeni.mrms.ac.id",
      password: await bcrypt.hash("wisanggeni_axel", 10),
      type: 1,
    },
  });

  await prisma.user.create({
    data: {
      username: "farrel dinarta",
      email: "farrel@wisanggeni.mrms.ac.id",
      password: await bcrypt.hash("wisanggeni_farrel", 10),
      type: 1,
    },
  });

  await prisma.user.create({
    data: {
      username: "arvin winardi",
      email: "arvin@wisanggeni.mrms.ac.id",
      password: await bcrypt.hash("wisanggeni_arvin", 10),
      type: 1,
    },
  });

  await prisma.user.create({
    data: {
      username: "darrell samuel ",
      email: "darrel@wisanggeni.mrms.ac.id",
      password: await bcrypt.hash("wisanggeni_darrel", 10),
      type: 1,
    },
  });

  await prisma.user.create({
    data: {
      username: "gilbert zaini",
      email: "gilbert@wisanggeni.mrms.ac.id",
      password: await bcrypt.hash("wisanggeni_gilbert", 10),
      type: 1,
    },
  });

  await prisma.user.create({
    data: {
      username: "axel ferdinand",
      email: "axel@wisanggeni.mrms.ac.id",
      password: await bcrypt.hash("wisanggeni_axel", 10),
    },
  });

  await prisma.user.create({
    data: {
      username: "farrel dinarta",
      email: "farrel@wisanggeni.mrms.ac.id",
      password: await bcrypt.hash("wisanggeni_farrel", 10),
    },
  });

  await prisma.user.create({
    data: {
      username: "arvin winardi",
      email: "arvin@wisanggeni.mrms.ac.id",
      password: await bcrypt.hash("wisanggeni_arvin", 10),
    },
  });

  await prisma.user.create({
    data: {
      username: "darrell samuel ",
      email: "darrel@wisanggeni.mrms.ac.id",
      password: await bcrypt.hash("wisanggeni_darrel", 10),
    },
  });

  await prisma.user.create({
    data: {
      username: "gilbert zaini",
      email: "gilbert@wisanggeni.mrms.ac.id",
      password: await bcrypt.hash("wisanggeni_gilbert", 10),
    },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
