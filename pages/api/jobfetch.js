import mongoose from 'mongoose';
import { Job } from './lib/jobs';

export default async function handler(req, res) {
  try {
    await mongoose.connect(process.env.url);


    if (req.method === 'GET') {
      const job = await Job.find();
      res.status(200).send(job);
    } else {
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
