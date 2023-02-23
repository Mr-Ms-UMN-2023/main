// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
const jwt = require("jsonwebtoken");

type Data = {
  message: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method != "GET") {
    return res.status(400).json({
      status: "FAIL",
      code: 404,
      message: "Page not found",
    });
  }

  const header = req.headers["authorization"];
  const token = header && header.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      status: "FAIL",
      code: 401,
      message: "Unauthorized",
    });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SIGNATURE);
    if (payload) {
      return res.status(401).json({
        status: "SUCCESS",
        code: 200,
        message: "Authorized",
      });
    }
  } catch (err) {
    if (err instanceof jwt.JsonWebTokenError) {
      // if the error thrown is because the JWT is unauthorized, return a 401 error
      return res.status(401).json({
        status: "FAIL",
        code: 401,
        message: "Unauthorized",
      });
    }
    return res.status(400).json({
      status: "FAIL",
      code: 400,
      message: "Bad request",
    });
  }
}
