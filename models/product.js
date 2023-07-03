import { Schema, model, models } from 'mongoose'

const ProductSchema = new Schema({
    creator: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  name: {
    type: String,
    required: [true, 'Name is required!']
  },
  price: {
    type: String,
    required: [true, 'Price is required!']
    },
  description: {
    type: String,
    required: [true, 'Descripion is required!']
  },
  imageURL: {
      type: String,
      required: [true, 'Image is required!']
  }
})

const Product = models.Product || model('Product', ProductSchema)

export default Product
