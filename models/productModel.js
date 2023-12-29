import mongoose from "mongoose";

const beautyProductSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    mrp: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum:["makeup",'hair','skin']
    },
    subCategory:{
      type: String,
      required: true,
      enum:["eyes","face","lips","hair care",'hair styling','tools & asscessories','moisturizer','masks','body care']
    },
    subSubCategory:{
     type:String,
     required:true,
     enum:["Kajal", "Eyeliner", "Mascara","Face Primer", " Foundation", "Compact","Lipstick", "Lip Gross", "Lip Liner","Shampoo", "Hair Oil", "Conditioner","Hair Color", " Hair Spray", "Gels & Waxes","Hair Combs", "Hair Brushes", "Dryers","Face Moisturizer", "Face Oils", "Serums","Sheet Masks", "Sleeping Masks", "Face Packs",
     "Body Butter", "Massage Oil", "Soaps"]
    },

    ingredients: [String], 
    description: {
      type: String,
    },
    img: {
      type: String,
    },
    ratings: {
      type: Number,
      default: 0,
    },
    reviews: [
      {
        name: {
          type: String,
        },
        email:{
          type: String,
          required: true,
        },
        text: String,
        rating: {
          type: Number,
          required: true,
        },
        date: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  });
  
  const BeautyProduct = mongoose.models.BeautyProduct || mongoose.model('BeautyProduct', beautyProductSchema);
  export default BeautyProduct;