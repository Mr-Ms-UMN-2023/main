import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      username: "koong hiap",
      email: "koonghiap@wisanggeni.mrms.ac.id",
      password: await bcrypt.hash("wisanggeni_koonghiap", 10),
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
