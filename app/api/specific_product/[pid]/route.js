import { connectToDb } from '@/utils/database'
import Product from '../../../../models/product'

export async function GET (request, { params }) {
  try
  {
    await connectToDb()
    if (!params.pid) {
  return new Response(JSON.stringify({ error: 'Product ID is missing' }), {
    status: 400,
    headers: { 'Content-Type': 'application/json' }
  })
}

    const product = await Product.find({
      _id: params.pid
    })
    if (!product) {
      return new Response(JSON.stringify({ error: 'Product not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      })
    }
    
    return new Response(JSON.stringify(product), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error) {
    console.log('error:', error)

    return new Response(JSON.stringify({ error: error }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}
