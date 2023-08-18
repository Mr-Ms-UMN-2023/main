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
    data: posts,
  });
};

const readFile = async (req: NextApiRequest, saveLocally: Boolean) => {
  const APP_URL =
  process.env.NODE_ENV == "production"
    ? process.env.APP_URL
    : "http://localhost:8000";
  const options: any = {};

  if (saveLocally) {
    options.uploadDir = path.join(process.cwd(), "/public/images2");
    options.filename = (name, ext, path, form) => {
      return Date.now().toString() + "_" + path.originalFilename;
    };
    options.multiples = true;
  }


  const form = formidable(options);
  return new Promise((resolve, reject) => {
    form.parse(req, async (err, fields, files) => {
      if (err) reject(err);
      try {
        console.log("WKKW");
        const data = await prisma.sponsor_medpar.create({
          data: {
            type: fields.type,
            src : fields.src,
            nama: fields.nama,
            url: fields.url,
            bg: fields.bg,
          },
        });
        // Resolve on success
      } catch (err) {
        reject(err); // Reject on catch block
      }
      resolve({ fields, files });       
    });
  });
};

export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    await fs.readdir(path.join(process.cwd() + "/public", "/images2"));
  } catch (err) {
    await fs.mkdir(path.join(process.cwd() + "/public", "/images2"));
  }

  try {
    const result = await readFile(req, true)
    return res.status(200).json({
      data: result,
      message: "Data berhasil dimasukkan",
    });
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

    return res.status(200).json({ message: "data berhasil dihapus" });
  } catch (error) {
    return res.status(500).json({ message: error });
  } finally {
    await prisma.$disconnect();
  }
};

export const PUT = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { id, type, src, nama, url, bg } = await JSON.parse(req.body);
    const post = await prisma.sponsor_medpar.update({
      where: {
        Sponsor_MedparID: id,
      },
      data: {
        type,
        src,
        nama,
        url,
        bg,
      },
    });
    return res.status(200).json({ post });
  } catch (err) {
    return res.status(500).json({ message: err });
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
