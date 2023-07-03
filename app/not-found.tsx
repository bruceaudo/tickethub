import Link from 'next/link';
import React from 'react';

type notfoundProps = {
    
};

const notfound:React.FC<notfoundProps> = () => {
    
    return <div className="sm:text-[40px] text-[30px] font-bold flex flex-col h-screen justify-center items-center text-center lg:max-w-[80%] mx-auto -translate-y-[100px]">
        <p>
          Sorry! We haven't found what you are looking for. Go back to <Link href={"/"} className="text-[#0077be] underline inline">
            Home
          </Link>
        </p>
      </div>;
}
export default notfound;