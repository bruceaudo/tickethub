import { connectToDb } from '@/utils/database'
import Product from '../../../models/product'

export async function POST (req) {
  const { name, price, description, image_url, userID } = await req.json()

  try {
    await connectToDb()

    const newProduct = new Product({
      creator: userID,
      name: name,
      price: price,
      description: description,
      imageURL: image_url
    })

    await newProduct.save()

    return new Response(JSON.stringify(newProduct), {
      status: 201
    })
  } catch (error) {
    return new Response('Failed to create new product', {
      status: 500
    })
  }
}


