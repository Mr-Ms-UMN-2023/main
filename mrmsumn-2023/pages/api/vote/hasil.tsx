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
