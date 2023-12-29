import mongoose from 'mongoose';



 export default async function connectToDatabase() {
mongoose
  .connect(`${process.env.DATABASE}`)
  .catch((error) => console.log(error));
}