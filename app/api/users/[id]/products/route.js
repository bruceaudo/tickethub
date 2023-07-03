import { connectToDb } from '@/utils/database'
import Product from '../../../../../models/product'

export async function GET (request, { params }) {
  try {
    await connectToDb()
    const products = await Product.find({ creator: params.id })
    if (!products) {
      return new Response(JSON.stringify({ error: 'Products not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      })
    }
    return new Response(JSON.stringify(products), {
      status: 200
    })
  } catch (error)
  {
    console.log('error:', error)

    return new Response(JSON.stringify({ error: error }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
    
  }
}
