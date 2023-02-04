// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // res.status(200).json({ name: 'John Doe' })
  res.status(200).json({
    message:
      "Mohon Maaf Website Mr. & Ms. UMN 2023 sedang dalam masa Maintenance silahkan kembali lagi nanti",
  });
}
