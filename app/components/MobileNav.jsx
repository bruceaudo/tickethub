"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  Bars3Icon,
  ChevronDownIcon,
  UserCircleIcon
} from "@heroicons/react/24/solid";
import Image from "next/image";
import { useSession, signIn, signOut, getProviders } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

export default function MobileNav({isOpen, setIsOpen}) {
  const { data: session } = useSession();
  
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const router = useRouter();

  const checkIfLoggedIn = () => {
    if (!session?.user) {
      setIsLoggedIn(false);
      return;
    }
    setIsLoggedIn(true);
    router.push("/sell/dashboard");
  };
  const [providers, setProviders] = useState(null);
  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };

    setUpProviders();
  }, []);
  return (
    <div className="flex lg:hidden">
      {!session?.user ? (
        <div>
          <button
            className="shadow-none bg-transparent mr-5"
            onClick={checkIfLoggedIn}
          >
            Sell
          </button>
          {providers &&
            Object.values(providers).map((provider) => (
              <button
                type="button"
                key={provider.name}
                onClick={() => signIn(provider.id)}
                className="rounded-lg px-3 w-fit py-2 bg-[#0077be] text-white text-sm"
              >
                Sign up / Sign in
              </button>
            ))}
        </div>
      ) : (
        <div className="flex items-center">
          <Link className="mr-5" href={"/sell/dashboard"}>
            Sell
          </Link>
          <span
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex gap-[2px] relative items-center cursor-pointer"
          >
            <Image
              className="h-8 w-8 rounded-full"
              width={32}
              height={32}
              src={session?.user.image}
              alt="Profile"
            />
            <ChevronDownIcon className="w3 h-3" />
            {isOpen && (
              <div className="absolute shadow-lg bg-white border border-[#f4f4f4] w-[240px] top-[38px] rounded-lg px-5 py-5 right-[8px] z-50">
                <h3 className="text-center text-base font-semibold text-black">
                  What are you looking for?
                </h3>

                <p
                  onClick={() => signOut()}
                  className="px-3 py-2 w-full mt-4 rounded-lg bg-[#0077be] text-white"
                >
                  Log out
                </p>
                <Link
                  href={"/sell/dashboard"}
                  className="px-3 inline-block py-2 w-full text-sm mt-5 border-t "
                >
                  Sell on Tickethub
                </Link>
              </div>
            )}
          </span>
        </div>
      )}
    </div>
  );
}
