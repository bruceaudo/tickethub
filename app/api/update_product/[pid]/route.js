import { connectToDb } from '@/utils/database'
import Product from '../../../../models/product'

export async function PATCH(req, { params })
{
  
  const { name, price, description, image_url, userID } = await req.json()
  const product_id = params.pid
  
  try
  {
    await connectToDb();
    let updatedProduct;
    if (!image_url)
    {
      updatedProduct = {
        creator: userID,
        name: name,
        price: price,
        description: description
      };
    } else
    {
      updatedProduct = {
        creator: userID,
        name: name,
        price: price,
        description: description,
        imageURL: image_url
      };
    }


    const options = { new: true };
    const updatedProd = await Product.findByIdAndUpdate(product_id, updatedProduct, options)

    if (!updatedProd) {
      return new Response('Failed to update product', {
        status: 500
      })
    }
    console.log(updatedProd)
    return new Response(JSON.stringify(updatedProduct), {
      status: 201
    })
  } catch (error) {
    return new Response('Failed to update product', {
      status: 500
    })
  }
}
