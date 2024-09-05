import mongoose from "mongoose";
import { Product } from "./lib/product";

export default async function signup(req, res) {
    try {
        // Check if the request method is POST
        if (req.method === 'POST') {
            const { myname, myemail, mymobile, mymessage } = req.body;

            await mongoose.connect(process.env.url);
            let product = new Product({
                name: myname,
                email: myemail,
                mobile: mymobile,
                message: mymessage
            });
            const result = await product.save();
            res.status(200);
        } else {
            res.setHeader('Allow', ['POST']);
            return res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
