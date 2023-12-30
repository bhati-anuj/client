import { NextResponse } from "next/server";
import BeautyProduct from "@/models/productModel";
import connectToDatabase from "@/lib/db";
import cloudinary from "cloudinary";
import { Buffer } from "buffer";
import DatauriParser from "datauri/parser";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const dynamic = "force-dynamic";
export async function POST(request) {
  try {
    await connectToDatabase();
    const formData = await request.formData();
    const parser = new DatauriParser();

    const imageFile = formData.get("photo");
    const name = formData.get("name");
    const brand = formData.get("brand");
    const price = formData.get("price");
    const category = formData.get("category");
    const subCategory = formData.get("subCategory");
    const mrp = formData.get("mrp");
    const subSubCategory = formData.get("subSubCategory");
    const description = formData.get("description");

    if (!imageFile) {
      return NextResponse.json({ error: "Image file not provided" });
    }

    const buffer = Buffer.from(await imageFile.arrayBuffer());

    const file64 = parser.format(imageFile.name, buffer);

    const result = await cloudinary.uploader.upload(file64.content, {
      resource_type: "auto",
    });

    const newProduct = await BeautyProduct.create({
      name,
      brand,
      price,
      category,
      subCategory,
      subSubCategory,
      mrp,
      description,
      img: result.secure_url,
    });

    return NextResponse.json(newProduct);
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
