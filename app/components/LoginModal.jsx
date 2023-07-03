import React, { Dispatch, SetStateAction } from "react";
import { signIn, signOut, getProviders } from "next-auth/react";
import { XMarkIcon } from "@heroicons/react/24/solid";


const LoginModal = ({setIsLoggedIn}) => {
    

    const [providers, setProviders] = React.useState(null);
    React.useEffect(() => {
      const setUpProviders = async () => {
        const response = await getProviders();

        setProviders(response);
      };

      setUpProviders();
    }, []);
    return <div>
        <div onClick={() => setIsLoggedIn(true)} className="overlay" />
        <div className="modal h-[220px] w-[65%] md:h-[210px] md:w-[45%] lg:h-[200px] lg:w-[300px] rounded-lg flex flex-col items-center justify-start text-center p-5">
          
          <p className="mt-7 font-semibold text-base">
            Please login to continue. Or, if you don&apos;t have an account, sign
            up.
          </p>
          {providers && Object.values(providers).map(provider =>
              <button
                type="button"
                key={provider.name}
                onClick={() => signIn(provider.id)}
                className="rounded-lg px-3 mt-5 md:mt-6 w-fit py-2 bg-[#0077be] text-white text-sm"
              >
                Sign up / Sign in
              </button>
            )}
        </div>
      </div>;
};
export default LoginModal;
