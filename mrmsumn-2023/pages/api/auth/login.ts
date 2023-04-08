// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

type Data = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(400).json({
      status: "FAIL",
      code: 404,
      message: "Page not found",
    });
  }

  const { email, password = null } = req.body;

  if (!email) {
    return res.status(400).json({
      status: "FAIL",
      code: 400,
      message: "Masukkan username",
    });
  }

  const user = await prisma.user.findFirst({
    where: { email },
  });


  if (user && (await bcrypt.compare(password, user.password))){
    
        const payload = {
            id : user.id,
            username : user.username,
            email : user.email
        }

        jwt.sign(payload, process.env.JWT_SIGNATURE, {expiresIn : process.env.JWT_LIFETIME + 'd'}, 
            (err : any , token : any) => {

                if (err) {
                    return res.status(200).json({
                        status : "FAILED",
                        code : 403, 
                        message : "Failed to navigate to requested page"
                    })                    
                }

                return res.status(200).json({
                    status : "SUCCESS",
                    code : 200, 
                    data : {user, token}
                })
            });     
            
        return; 
        
    } else {
        return res.status(401).json({
            status : "FAIL",
            code : 401, 
            message : "Incorrect credentials"
        })    
    }
}
