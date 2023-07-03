import React from 'react';

type loadingProps = {
    
};

const ProductLoading:React.FC<loadingProps> = () => {
    
    return <section className="grid sm:grid-cols-2 sm:gap-16 grid-cols-1 sm:gap-y-0 gap-y-12 mt-[80px] sm:mt-[80px]">
        <div className="rounded-lg h-[450px] sm:w-[350px] w-full bg-gray-200 skeleton" />
        <div>
          <div className="bg-gray-200 rounded-lg py-5 skeleton" />
          <div className="rounded-lg mt-4 bg-gray-200 py-4 skeleton" />
          <div className="rounded-lg mt-4 bg-gray-200 py-4 skeleton" />
          <div className="rounded-lg w-1/3 bg-gray-200 mt-8 py-6 skeleton" />
        </div>
      </section>;
}
export default ProductLoading;