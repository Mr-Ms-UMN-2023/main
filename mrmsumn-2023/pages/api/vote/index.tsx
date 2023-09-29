import { PrismaClient } from "@prisma/client";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import formidable from "formidable";
import path from "path";
import fs from "fs/promises";
const prisma = new PrismaClient();

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const get = await prisma.vote_finalis2023.groupBy({
      by: "finalisID",
      _count: {
        finalisID: true,
      },
    });

    return res.status(200).json({
      status: 200,
      data: get,
    });
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: "Tidak ada vote",
    });
  }
};

export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
  const BASE_PATH =
    process.env.NODE_ENV == "development"
      ? "http://localhost:3000"
      : process.env.APP_URL;

  const { finalisID, userID } = await req.body;
  try {
    const post = await prisma.vote_finalis2023.create({
      data: {
        finalisID: finalisID,
        userID: userID,
      },
    });

    return res.status(200).json({
      status: 200,
      data: post,
    });
  } catch (err) {
    return res.status(500).json({
      status: 200,
      message: "Gagal melakukan voting",
    });
  }
};

export const DELETE = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const id = req.query.id as string;

    const post = await prisma.sponsor_medpar.delete({
      where: {
        Sponsor_MedparID: id,
      },
    });

    if (!post) {
      return res.status(500).json({ message: "Gagal Delete User" });
    }

    return res.status(200).json({
      status: 200,
      message: "data berhasil dihapus",
    });
  } catch (error) {
    return res.status(500).json({ message: error });
  } finally {
    await prisma.$disconnect();
  }
};

export const PUT = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await fs.readdir(
      path.join(process.cwd() + "/public", "/images", "/Sponsor")
    );
  } catch (err) {
    await fs.mkdir(path.join(process.cwd() + "/public", "/images", "/Sponsor"));
  }

  try {
    const { fields, files }: any = await readFile(req, true);

    if (Object.keys(files).length > 0) {
      const data = await prisma.sponsor_medpar.update({
        where: {
          Sponsor_MedparID: fields.id,
        },
        data: {
          src: "/images/Sponsor/" + files.src.newFilename.toString(),
          nama: fields.nama,
          url: fields.url,
          bg: fields.bg == "true" ? true : false,
        },
      });

      return res.status(200).json({
        status: 200,
        data: data,
        message: "Data berhasil diupdate",
      });
    }

    const data = await prisma.sponsor_medpar.update({
      where: {
        Sponsor_MedparID: fields.id,
      },
      data: {
        nama: fields.nama,
        url: fields.url,
        bg: fields.bg == "true" ? true : false,
      },
    });

    // Resolve on success
    return res.status(200).json({
      status: 200,
      data: data,
      message: "Data berhasil diupdate",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      message: "Data tidak berhasil diupdate",
    });
  }
};

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    // case "POST": {
    //   POST(req, res);
    //   break;
    // }
    case "GET": {
      GET(req, res);
      break;
    }
    // case "DELETE": {
    //   DELETE(req, res);
    //   break;
    // }
    // case "PUT": {
    //   PUT(req, res);
    //   break;
    // }
  }
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
