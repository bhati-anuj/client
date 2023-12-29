import BeautyProduct from "@/models/productModel";
import connectToDatabase from "@/lib/db";

export async function GET(request,{ params }) {
    try {
        await connectToDatabase();

        const id = params.id;

        const product = await BeautyProduct.findById(id);

        if (!product) {
            const notFoundResponse = { status: 'fail', message: 'Product not found' };
            return new Response(JSON.stringify(notFoundResponse), { status: 404, headers: { 'Content-Type': 'application/json' } });
        }

        const successResponse = { status: 'success', data: product };
        return new Response(JSON.stringify(successResponse), { headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
        console.error('Error in GET request:', error);

        const errorResponse = { status: 'fail', message: 'Internal server error' };
        return new Response(JSON.stringify(errorResponse), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}
