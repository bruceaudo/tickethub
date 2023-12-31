import React from 'react';

type loadingProps = {
    
};

const ProductLoading:React.FC<loadingProps> = () => {
    
    return <section className="grid lg:grid-cols-[_2fr_3fr] sm:grid-cols-[_2fr_2fr] lg:gap-20 sm:gap-10 grid-cols-1 sm:gap-y-0 gap-y-12 mt-[80px] sm:mt-[80px]">
        <div className="rounded-lg h-[480px] w-full bg-gray-200 skeleton" />
        <div>
          <div className="bg-gray-200 rounded-lg py-5 skeleton" />
          <div className="rounded-lg mt-4 bg-gray-200 py-4 skeleton" />
          <div className="rounded-lg mt-4 bg-gray-200 py-4 skeleton" />
          <div className="rounded-lg w-1/3 bg-gray-200 mt-8 py-6 skeleton" />
        </div>
      </section>;
}
export default ProductLoading;