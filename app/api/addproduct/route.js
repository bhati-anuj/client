import { NextResponse } from "next/server";
import BeautyProduct from "@/models/productModel";
import connectToDatabase from "@/lib/db";
import { Buffer } from "buffer";
import DatauriParser from "datauri/parser";
import fs from "fs/promises";
import path from "path";

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

    const newProduct = await BeautyProduct.create({
      name,
      brand,
      price,
      category,
      subCategory,
      subSubCategory,
      mrp,
      description,
    });

    const imagePath = `public/${newProduct._id}_${imageFile.name}`;
    const publicImagePath = `/${newProduct._id}_${imageFile.name}`;

    const protocol = request.headers.get("x-forwarded-proto") || "http"; 
    const host = request.headers.get("host") || "localhost"; 
    const fullImagePath = `${protocol}://${host}${publicImagePath}`;

    await fs.writeFile(imagePath, buffer);

    newProduct.img = fullImagePath;
    await newProduct.save();

    return NextResponse.json(newProduct);
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
