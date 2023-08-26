import { PrismaClient } from "@prisma/client";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import formidable from "formidable";
import path from "path";
import fs from "fs/promises";
const prisma = new PrismaClient();

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  const posts = await prisma.sponsor_medpar.findMany({});
  prisma.$disconnect();
  return res.status(200).json({
    status : 200,
    data: posts,
  });
};

const readFile = async (req: NextApiRequest, saveLocally: Boolean) => {
  const options: any = {};

  if (saveLocally) {
    options.uploadDir = path.join(process.cwd(), "/public/images/Sponsor");
    options.filename = (name: any, ext: any, path: any, form: any) => {
      return Date.now().toString() + "_" + path.originalFilename;
    };
    options.multiples = true;
  }

  const form = formidable(options);
  return new Promise((resolve, reject) => {
    form.parse(req, async (err, fields: any, files: any) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });
};

export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
  const BASE_PATH = process.env.NODE_ENV == "development" 
      ? "http://localhost:3000" 
      : process.env.APP_URL;

  try {
    await fs.readdir(
      path.join(process.cwd() + "/public", "/images", "/Sponsor")
    );
  } catch (err) {
    await fs.mkdir(path.join(process.cwd() + "/public", "/images", "/Sponsor"));
  }

  try {
    const { fields, files }: any = await readFile(req, true);


    try {
      const data = await prisma.sponsor_medpar.create({
        data: {
          type: Number(fields.type),
          src: "/images/Sponsor/" + files.src.newFilename.toString(),
          nama: fields.nama,
          url: fields.url,
          bg: Boolean(fields.bg),
        },
      });

      // Resolve on success
      return res.status(201).json({
        status : 201,
        data: data,
        message: "Data berhasil dimasukkan",
      });
    } catch (err) {
      return res.status(500).json({
        message: "Data tidak berhasil dimasukkan" + err,
      });
    }
  } catch (err) {
    return res.status(500).json({
      message: "Data tidak berhasil dimasukkan" + err,
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
      status : 200,
      message: "data berhasil dihapus" 
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

    const data = await prisma.sponsor_medpar.update({
      where: {
        Sponsor_MedparID: fields.id,
      },
      data: {
        type: Number(fields.type),
        src: "/public/images/Sponsor/" + files.src.newFilename.toString(),
        nama: fields.nama,
        url: fields.url,
        bg: Boolean(fields.bg),
      },
    });

    // Resolve on success
    return res.status(200).json({
      data: data,
      message: "Data berhasil diupdate",
    });
  } catch (err) {
    return res.status(500).json({
      message: "Data tidak berhasil diupdate",
    });
  }
};

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "POST": {
      POST(req, res);
      break;
    }
    case "GET": {
      GET(req, res);
      break;
    }
    case "DELETE": {
      DELETE(req, res);
      break;
    }
    case "PUT": {
      PUT(req, res);
      break;
    }
  }
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
