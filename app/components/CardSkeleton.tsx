import React from "react";

type CardSkeletonProps = {};

const CardSkeleton: React.FC<CardSkeletonProps> = () => {
  return (
    <section className="mt-8 mb-16 z-0">
      <div className="sm:my-6 my-10 grid lg:grid-cols-3 lg:gap-20 md:grid-cols-2 md:gap-10 grid-cols-1 sm:gap-y-0 gap-y-[62px]">
        <div className="">
          <div className="bg-gray-200 rounded-lg w-full h-[400px] skeleton" />
          <div className="mt-4 rounded-lg bg-gray-200 w-3/4 py-2 px-3 skeleton" />
          <div className="mt-4 rounded-lg bg-gray-200 w-3/4 py-2 px-3 skeleton" />
        </div>
        <div className="">
          <div className="bg-gray-200 rounded-lg w-full h-[400px] skeleton" />
          <div className="mt-4 rounded-lg bg-gray-200 w-3/4 py-2 px-3 skeleton" />
          <div className="mt-4 rounded-lg bg-gray-200 w-3/4 py-2 px-3 skeleton" />
        </div>
        <div className="">
          <div className="bg-gray-200 rounded-lg w-full h-[400px] skeleton" />
          <div className="mt-4 rounded-lg bg-gray-200 w-3/4 py-2 px-3 skeleton" />
          <div className="mt-4 rounded-lg bg-gray-200 w-3/4 py-2 px-3 skeleton" />
        </div>
        <div className="">
          <div className="bg-gray-200 rounded-lg w-full h-[400px] skeleton" />
          <div className="mt-4 rounded-lg bg-gray-200 w-3/4 py-2 px-3 skeleton" />
          <div className="mt-4 rounded-lg bg-gray-200 w-3/4 py-2 px-3 skeleton" />
        </div>
      </div>
    </section>
  );
};
export default CardSkeleton;
