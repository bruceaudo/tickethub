import Loading from "./loading";
import { Suspense } from "react";
import dynamic from "next/dynamic";
const All_products = dynamic(() => import("../../../components/All_products"), {
  ssr: false,
  loading: () => <Loading />
});

type pageProps = {};

const page: React.FC<pageProps> = () => {
 // const { data: session } = useSession();
  //const [products, setProducts] = useState([]);
  // useEffect(() => {
   // const getData = async () => {
    //  if (session?.user?.id) {
     //   const response = await fetch(`/api/users/${session.user.id}/products`);
      //  const data = await response.json();
      //  setProducts(data);
     // }
   // };

   // getData();
  //}, [session?.user?.id]);

  return (
    <div className="mt-8 mb-16">
      <h2 className="font-semibold sm:text-2xl text-[22px]">All Products</h2>
      
        <All_products />
       
    </div>
  )
};
export default page;
