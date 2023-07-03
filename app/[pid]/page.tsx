import Product_page from "../components/Product_page";

type pageProps = {};

const Page: React.FC<pageProps> = () => {
  

  return <main className="flex flex-col max-h-screen justify-center items-center mt-[80px] sm:mt-[80px] lg:mb-[200px] md:mb-[50px] mb-[70px]">
        <Product_page />
    </main>;
};

export default Page;
