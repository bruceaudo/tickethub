"use client"
import { Suspense } from "react";
import dynamic from "next/dynamic";
import Loading from './loading'
const Product_page = dynamic(() => import("../components/Product_page"), {
  ssr: false,
  loading: () => <Loading />
});

type pageProps = {};

const Page: React.FC<pageProps> = () => {
  

  //const [product, setProduct] = useState<any[]>([]); // Set the initial state as an array

  //useEffect(() => {
    //const getData = async () => {
     // const response = await fetch(`/api/specific_product/${product_id}`);
     // const data = await response.json();

     // if (Array.isArray(data)) {
      //  setProduct(data); // If data is an array, set the state directly
      //} else {
      //  setProduct([data]); // If data is not an array, convert it to an array and set the state
     // }
    //};

   // getData();
  //}, []);

  return <main className="flex flex-col max-h-screen justify-center items-center mt-[80px] sm:mt-[80px] lg:mb-[200px] md:mb-[50px] mb-[70px]">
      <Suspense fallback={<Loading />}>
        <Product_page />
      </Suspense>
    </main>;
};

export default Page;
