import mongoose from "mongoose";
import { Product } from "./lib/product";

export default async function handler(req, res) {
  try {
    await mongoose.connect(process.env.url);

    if (req.method === "GET") {
      // Get page and limit from query params
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 50;

      const skip = (page - 1) * limit;

      // Fetch paginated products
      const products = await Product.find()
        .skip(skip)
        .limit(limit);

      // Get total count
      const totalProducts = await Product.countDocuments();

      res.status(200).json({
        products,
        pagination: {
          totalProducts,
          currentPage: page,
          totalPages: Math.ceil(totalProducts / limit),
          limit,
        },
      });
    } else {
      res.setHeader("Allow", ["GET"]);
      res
        .status(405)
        .end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
}