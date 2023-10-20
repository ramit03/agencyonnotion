import { NextApiRequest, NextApiResponse } from 'next';

export function POST(req: NextApiRequest, res: NextApiResponse) {
  console.log("Inside API route");
  res.status(200).json({ message: "Test successful" });
}