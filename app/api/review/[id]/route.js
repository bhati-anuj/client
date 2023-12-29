import BeautyProduct from "@/models/productModel";
import connectToDatabase from "@/lib/db";

export async function PATCH(request, { params }) {
  try {
    await connectToDatabase();
    const id = params.id;

    const { name, email, text, rating } = await request.json();
    const beautyProduct = await BeautyProduct.findById(id);

    if (!beautyProduct) {
      return new Response(
        JSON.stringify({
          status: 'fail',
          error: 'Product not found',
        }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    beautyProduct.reviews.push({ name, email, text, rating });

    if (beautyProduct.reviews.length > 0) {
      beautyProduct.ratings =
        beautyProduct.reviews.reduce((sum, review) => sum + review.rating, 0) /
        beautyProduct.reviews.length;
    } else {
      beautyProduct.ratings = 0;
    }

    await beautyProduct.save();

    return new Response(
      JSON.stringify({
        status: 'success',
        message: 'Review added successfully',
      }),
      { status: 201, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in PATCH request:', error);

    return new Response(
      JSON.stringify({
        status: 'fail',
        error: 'provide a valid product id',
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
