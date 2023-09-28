import { PrismaClient } from "@prisma/client";
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import formidable from "formidable";
import path from "path";
import fs from "fs/promises";
const prisma = new PrismaClient();

const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  const get = await prisma.sponsor_medpar.findFirst({
    where: {
      Sponsor_MedparID: req.query.id as string,
    },
  });

  return res.status(200).json({
    status: 200,
    data: get,
  });
};

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET": {
      GET(req, res);
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
