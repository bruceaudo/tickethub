import React from "react";

type LoadingProps = {};

const Loading: React.FC<LoadingProps> = () => {
  return <section className="mt-[110px] md:mt-[120px] lg:mt-[130px]">
      <div className="sm:my-6 my-10 grid lg:grid-cols-3 lg:gap-[60px] md:grid-cols-2 md:gap-10 grid-cols-1 sm:gap-y-0 gap-y-[62px]">
        <div className="">
          <div className="bg-gray-200 rounded-lg w-full h-[400px] skeleton" />
          <div className="mt-4 rounded-lg bg-gray-200 w-3/4 py-2 px-3 skeleton" />
          <div className="mt-4 rounded-lg bg-gray-200 w-1/5 py-2 px-3 skeleton" />
          <div className="w-full bg-gray-200 mt-4 py-6 px-3 rounded-lg skeleton" />
        </div>
        <div className="">
          <div className="bg-gray-200 rounded-lg w-full h-[400px] skeleton" />
          <div className="mt-4 rounded-lg bg-gray-200 w-3/4 py-2 px-3 skeleton" />
          <div className="mt-4 rounded-lg bg-gray-200 w-1/5 py-2 px-3 skeleton" />
          <div className="w-full bg-gray-200 mt-4 py-6 px-3 rounded-lg skeleton" />
        </div>
        <div className="">
          <div className="bg-gray-200 rounded-lg w-full h-[400px] skeleton" />
          <div className="mt-4 rounded-lg bg-gray-200 w-3/4 py-2 px-3 skeleton" />
          <div className="mt-4 rounded-lg bg-gray-200 w-1/5 py-2 px-3 skeleton" />
          <div className="w-full bg-gray-200 mt-4 py-6 px-3 rounded-lg skeleton" />
        </div>
        <div className="">
          <div className="bg-gray-200 rounded-lg w-full h-[400px] skeleton" />
          <div className="mt-4 rounded-lg bg-gray-200 w-3/4 py-2 px-3 skeleton" />
          <div className="mt-4 rounded-lg bg-gray-200 w-1/5 py-2 px-3 skeleton" />
          <div className="w-full bg-gray-200 mt-4 py-6 px-3 rounded-lg skeleton" />
        </div>
      </div>
    </section>;
};
export default Loading;
