import { connectToDb } from '@/utils/database'
import Product from '../../../../models/product'

export async function DELETE(request ,{ params })
{
  console.log(params)
  try {
    await connectToDb()
    if (!params.pid) {
      return new Response(JSON.stringify({ error: 'Product ID is missing' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    const product = await Product.findById(params.pid)
    if (!product) {
      return new Response(
        JSON.stringify({
          error: 'Product you are trying to delete does not exist'
        }),
        {
          status: 404,
          headers: { 'Content-Type': 'application/json' }
        }
      )
    }

    const deleteProduct = await Product.findByIdAndRemove(params.pid)
    return new Response(JSON.stringify(deleteProduct), {
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
