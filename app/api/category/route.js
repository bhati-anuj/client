import BeautyProduct from "@/models/productModel";
import connectToDatabase from "@/lib/db";

export async function POST(request) {
  try {
    await connectToDatabase();
    const { category, subCategory, subSubCategory } = await request.json();

    const aggregationPipeline = [];

    if (category) {
      aggregationPipeline.push({ $match: { category } });
    }

    if (subCategory) {
      aggregationPipeline.push({ $match: { subCategory } });
    }

    if (subSubCategory) {
      aggregationPipeline.push({ $match: { subSubCategory } });
    }

    const allProducts = await BeautyProduct.aggregate(aggregationPipeline);
    return Response.json({status:'sucess',data:allProducts});
  } catch (error) {
    return Response.json({status:'fail',error:'please enter a valid category'})
  }
}
