import { NextRequest, NextResponse } from "next/server";
import BeautyProduct from "@/models/productModel";
import connectToDatabase from "@/lib/db";


export const dynamic = "force-dynamic";
export async function GET(request) {
  try {
    await connectToDatabase();

    const allProducts = await BeautyProduct.find();

    return NextResponse.json(allProducts);
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}

