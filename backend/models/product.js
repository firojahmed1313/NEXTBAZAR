import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "plz add a name"],
  },
  description: {
    type: String,
    require: [true, "plz add a description"],
  },
  price: {
    type: Number,
    require: [true, "plz add a price"],
  },
  images: [
    {
      public_id: {
        type: String,
      },
      img_url: {
        type: String,
      },
    },
  ],
  catagory: {
    type: String,
    require: [true, "plz add a catagory"],
    enum: {
      values: [
        "Electronics",
        "Cameras",
        "Laptops",
        "Accessories",
        "Headphones",
        "Sports",
      ],
      message: "plz add a correct catagory",
    },
  },
  seller: {
    type: String,
    require: [true, "plz add a seller"],
  },
  stock: {
    type: Number,
    require: [true, "plz add a stock"],
  },
  ratings: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      rating: {
        type: Number,
        require: true,
      },
      comment: {
        type: String,
        require: true,
      },
      createAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  createAt: {
    type: Date,
    default: Date.now,
  },
});


export default mongoose.models.Product || mongoose.model("Product",productSchema)