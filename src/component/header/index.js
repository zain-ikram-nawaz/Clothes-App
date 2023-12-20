import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { FaBarsStaggered } from "react-icons/fa6";
function Header() {
  const [isclick, setisclick] = useState(true);

  return (
    <>
    <div className="font-semibold mt-[3%] xs: container mx-auto grid sm:container grid-cols-2 leading-10  md:container mx-auto  lg:container mx-auto xl:container mx-auto 2xl:container mx-auto">
      <div className="xs:col-span-1 md:col-span-1 2xl:justify-end">
        <Image
          className="xs:ml-4 logo"
          src="/logo.png"
          width={200}
          height={300}
          alt="logo"
        ></Image>
      </div>
      <div className="mt-2 xs:col-span-1 text-center text-2xl ml-[60%]  md:hidden lg:hidden xl:hidden 2xl:hidden">
        <button
          className="justify-end"
          onClick={() => {
            setisclick(!isclick);
          }}
        >
          <FaBarsStaggered />
        </button>
      </div>
      <div className={isclick ? "xs:hidden sm:hidden" : "mob-version"}>
        <ul className=" nav-link text-center md:flex lg:flex justify-end   xl:flex justify-end  2xl:flex justify-end " >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="./mens">Men's</Link>
          </li>
          <li>
            <Link href="./womens">Womens's</Link>
          </li>
          <li>
            <Link href="./kids">Kid's</Link>
          </li>
          <li>
            <Link href="#">Pages</Link>
          </li>
          <li>
            <Link href="./About">About</Link>
          </li>
          <li>
            <Link href="./explore">Explore</Link>
          </li>
        </ul>
      </div>
    
    </div>
    <hr className="mt-3 drop-shadow-lg"></hr>
    </>
  
  
  );
}
export default Header;
