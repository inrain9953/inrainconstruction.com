import mongoose from 'mongoose';
import { JobApplicant } from './lib/jobapplication';

export default async function handler(req, res) {
  try {
    await mongoose.connect(process.env.url);


    if (req.method === 'GET') {
      const jobs = await JobApplicant.find();
      res.status(200).send(jobs);
    } else {
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
