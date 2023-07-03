"use client"
import { ArrowUpTrayIcon } from "@heroicons/react/24/solid";
import React, { ChangeEvent, useEffect, useState } from "react";
import Image from 'next/image'
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

type pageProps = {};

const page: React.FC<pageProps> = () => {
    const params = useSearchParams();
    const product_id = params.get("id");
    
    const [product, setProduct] = useState<any[] | null>(null)
    const router = useRouter()
  
  const { data: session } = useSession()
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [loading, setLoading] = useState(false);
    const[imageSrc, setImageSrc]=useState('')
    
    useEffect(() => {
        const getData = async() => {
            try {
                setLoading(true)
                const response = await fetch(`/api/specific_product/${product_id}`);
                const data = await response.json();

            setProduct(data);
      setName(data && data[0] && data[0].name);
      setPrice(data && data[0] && data[0].price);
      setDescription(data && data[0] && data[0].description);
      setImageSrc(data && data[0] && data[0].imageURL);
            setLoading(false)
            } catch (error) {
                console.log("Error:", error)
            }
        }
        getData()
        
    },[])
    
    
    const handleImageChange = (changeEvent: ChangeEvent<HTMLInputElement>): void => {
        if (!imageSrc.toLowerCase().startsWith('https')) {
            const reader = new FileReader();

            reader.onload = (onLoadEvent) => {
                const result = onLoadEvent.target?.result as string;
                setImageSrc(result);
            };

            const file = changeEvent.target.files?.[0];
            if (file) {
                reader.readAsDataURL(file);
            }
        }
};


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        if (!imageSrc.toLowerCase().startsWith('https')) {
            let imageURL
            const form = event.currentTarget;
            const fileInput = Array.from(form.elements).find(
                (element) => element instanceof HTMLInputElement && element.name === 'myFile'
            ) as HTMLInputElement | undefined;

            if (fileInput && fileInput.files) {
                const formData = new FormData();

                for (let i = 0; i < fileInput.files.length; i++) {
                    const file = fileInput.files[i];
                    formData.append('file', file);
                }

                formData.append('upload_preset', 'tickethub')

                // Perform the necessary actions with the formData
                const data = await fetch(`https://api.cloudinary.com/v1_1/dbebdd3tr/image/upload`, {
                    method: 'POST',
                    body: formData
                }).then(response => response.json())

                imageURL = data.secure_url
                console.log(imageURL)
            }
      
    
            const uploadData = {
                name: name,
                price: price,
                description: description,
                image_url: imageURL,
                userID: session?.user?.id
            }

            try {
                setSubmitting(true)
                const response = await fetch(`/api/update_product/${product_id}`, {
                    method: 'PATCH',
                    body: JSON.stringify(uploadData)
                })

                if (response.ok) {
                    router.push('/sell/dashboard')
                }
            } catch (error) {
                console.log('Error:', error)
            } finally {
                setSubmitting(false)
            }
        } else {
             const uploadData = {
                name: name,
                price: price,
                description: description,
                userID: session?.user?.id
            }

            try {
                
                setSubmitting(true)
                const response = await fetch(`/api/update_product/${product_id}`, {
                    method: 'PATCH',
                    body: JSON.stringify(uploadData)
                })

                if (response.ok) {
                    router.push('/sell/dashboard/allproducts')
                } else {
                    console.log(response)
                }
            } catch (error) {
                console.log('Error:', error)
            } finally {
                setSubmitting(false)
            }
        }
    };


  
  return <div className="mt-8 mb-16">
      <h2 className="font-semibold sm:text-2xl text-[22px]">Edit Product</h2>
      
      <form onSubmit={handleSubmit}>
        <p className="form-label mt-6">Event banner image:</p>
        <div className="flex gap-5 flex-col sm:flex-row sm:items-center">
        <label htmlFor="myfile" className="cursor-pointer">
          <div className="h-[250px] w-[250px] p-5 mt-1 border rounded-md flex gap-2 items-center justify-center">
            <ArrowUpTrayIcon className="icon" />
            Click to upload image
          </div>
        </label>

          <input className="hidden" type="file" accept="image/*" onChange={handleImageChange} id="myfile" name="myFile" />
              {imageSrc && !loading && <div className="overflow-hidden h-[250px] w-[250px] rounded-md"><Image width={250} height={250} className="rounded-md object-cover" src={imageSrc} alt="Preview" /></div>}
              </div>
        <p className="form-label mt-4">Name of event:</p>
        <input onChange={(event) => setName(event.target.value)} value={name} type="text" className="border rounded-md lg:w-2/3 w-full h-[40px] mt-1 focus:border focus:border-gray-200 focus:shadow-md focus:outline-none indent-2" />
        <p className="form-label mt-4">Ticket price(Ksh.):</p>
        <input onChange={(event) => setPrice(event.target.value)} value={price} type="text" className="border rounded-md lg:w-2/3 w-full h-[40px] mt-1 focus:border focus:border-gray-200 focus:shadow-md focus:outline-none indent-2" />
        <p className="form-label mt-4">Brief description of event:</p>
        <textarea onChange={(event) => setDescription(event.target.value)} value={description} className="border rounded-md h-[200px] lg:w-2/3 w-full mt-1 focus:border focus:border-gray-200 focus:shadow-md focus:outline-none indent-2" />
        <button disabled={submitting} className="rounded-lg px-3 w-[100px] py-2 bg-[#0077be] text-white text-sm my-4 block">
          {submitting ? 'Publishing...': 'Publish'}
        </button>
          </form>
          
    </div>;
};
export default page;
