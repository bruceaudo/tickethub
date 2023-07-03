"use client"
import { ArrowUpTrayIcon } from "@heroicons/react/24/solid";
import React, { ChangeEvent, useEffect, useState } from "react";
import Image from 'next/image'
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


const AddProduct = () => {
  
    const router = useRouter()
  
  const { data: session } = useSession()
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [submitting, setSubmitting] = useState(false);
    const[imageSrc, setImageSrc]=useState('')


    const handleImageChange = (event) => {
      const file = event.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (onLoadEvent) => {
          const result = onLoadEvent.target?.result;
          setImageSrc(result);
        };
        reader.readAsDataURL(file);
      }
    };


  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true)
    let imageURL
    const form = event.currentTarget;
    const fileInput = Array.from(form.elements).find(
      (element) => element instanceof HTMLInputElement && element.name === 'myFile'
    );

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
      
      const response = await fetch('/api/new_product', {
        method: 'POST',
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
};


  
  return <div className="mt-8 mb-16">
      <h2 className="font-semibold sm:text-2xl text-[22px]">Add Product</h2>
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
              {imageSrc && <div className="overflow-hidden h-[250px] w-[250px] rounded-md"><Image width={250} height={250} className="rounded-md object-cover" src={imageSrc} alt="Preview" /></div>}
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
export default AddProduct;
