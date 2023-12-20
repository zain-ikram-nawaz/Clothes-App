import Image from "next/image";
import {FaInstagram } from "react-icons/fa";

function Aboutus() {
  return (
    <>
      <div className="">
        <div className="">
          <div className="container mx-auto xs:mt-10 md:mt-10 lg:mt-16 mb-16 xl:mt-16 2xl:mt-16 mb-20 ">
            <h2>Social Media</h2>
            <p className="mt-4">
              Details to details is what makes Hexashop different from the other
              themes
            </p>
          </div>
          <div className="md:flex md:mt-10 lg:flex xl:flex 2xl:flex" >
          <div className="about-hover">
          <div className="about-icon relative top-14">
            <h4>Fashion</h4>
            <i>
              <FaInstagram/>
            </i>
          </div>
          <Image src="/instagram-01.jpg" className=" xs:w-[100vw] h-[50vh] sm:w-[100vw] h-[50vh] md:h-[15vh] lg:h-[15vh] w-[25vw] xl:h-[20vh] w-[14vw]  2xl:h-[30vh]" width={200} height={200}></Image>
        </div>
        <div className="about-hover">
          
          <div className=" about-icon relative top-14 ">
            <h4>New</h4>
            <i >
              <FaInstagram  />
            </i>
          </div>
          <Image className="xs:w-[100vw] h-[50vh] sm:w-[100vw] h-[50vh] md:h-[15vh] w-[25vw] lg:h-[15vh] w-[15vw] xl:h-[20vh] 2xl:h-[30vh]" src="/instagram-02.jpg" width={1000} height={1000}></Image>
        </div>
        <div className="about-hover">
          
          <div className=" about-icon relative top-14 ">
            <h4>Brand</h4>
            <i >
              <FaInstagram />
            </i>
          </div>
          <Image className="xs:w-[100vw] h-[50vh] sm:w-[100vw] h-[50vh] md:h-[15vh] w-[25vw] lg:h-[15vh] w-[15vw] xl:h-[20vh] 2xl:h-[30vh]" src="/instagram-03.jpg" width={500} height={500}></Image>
        </div>
        <div className="about-hover">
          
          <div className=" about-icon relative top-14">
            <h4>Makeup</h4>
            <i >
              <FaInstagram  />
            </i>
          </div>
          <Image className="xs:w-[100vw] h-[50vh] sm:w-[100vw] h-[50vh] md:h-[15vh] w-[25vw] lg:h-[15vh] w-[15vw] xl:h-[20vh] 2xl:h-[30vh]" src="/instagram-04.jpg" width={500} height={500}></Image>
        </div>
        <div className="about-hover">
          
          <div className="about-icon relative top-14">
            <h4>Leather</h4>
            <i >
              <FaInstagram />
            </i>
          </div>
          <Image className="xs:w-[100vw] h-[50vh] sm:w-[100vw] h-[50vh] md:h-[15vh] w-[25vw] lg:h-[15vh] w-[15vw] xl:h-[20vh] 2xl:h-[30vh]" src="/instagram-05.jpg" width={500} height={500}></Image>
        </div>
        <div className="about-hover">
          
          <div className=" about-icon relative top-14 ">
            <h4>Bags</h4>
            <i >
              <FaInstagram />
            </i>
          </div>
          <Image className="xs:w-[100vw] h-[50vh] sm:w-[100vw] h-[50vh] md:h-[15vh] w-[25vw] lg:h-[15vh] w-[15vw] xl:h-[20vh] 2xl:h-[30vh]" src="/instagram-06.jpg" width={500} height={500}></Image>
        </div>
          
          </div>
        </div>
      </div>
      <div className=" mt-60 container mx-auto md:grid grid-cols-4 lg:grid grid-cols-4  xl:grid grid-cols-4 mt-40 mb-40 2xl:grid grid-cols-4 mt-20">
        <div className="col-span-2">
          <div>
            <h2 className="md:text-2xl mt-4 mb-4">By Subscribing To Our Newsletter You Can Get 30% Off</h2>
            <p className="">
              Details to details is what makes Hexashop different from the other
              themes
            </p>
          </div>
          <div className="text-black ">
            <input
              className="xs:block w-[100vw] border-2 mt-2 p-2 md:w-[15vw] mt-4 ml-2 lg:w-[15vw] mt-4 ml-2 xl:w-[15vw] mt-4 ml-2 2xl:w-[15vw] mt-4 ml-2"
              type="text"
              placeholder="Your Name"
            />
            <input
              className="xs:block w-[100vw] border-2 mt-2 p-2 md:w-[15vw] ml-2 lg:w-[15vw] mt-4 ml-2 xl:w-[15vw] mt-4 ml-2 2xl:w-[15vw] mt-4 ml-2"
              type="text"
              placeholder="Your Email Adress"
            />
         
        <button className="bg-black text-white p-2 w-[100vw] mt-4 md:w-[7vw] ml-2 lg:w-[7vw] ml-2  xl:w-[7vw] ml-2 2xl:w-[7vw] ml-2 ">Send</button>
          </div>
        </div>
        <div className="text-black xs:mt-20 sm:mt-20 text-center col-span-2 mt-4 grid max-auto grid-cols-2 gap-5 lg:gap-10 xl:gap-10 xl:gap-10 ">
          <div>
            <h5>Store Location:</h5>
            <p>Sunny Isles Beach, FL 33160, United States</p>
          </div>
          <div>
            <h5>Work Hours:</h5>
            <p>07:30 AM - 9:30 PM Daily</p>
          </div>
          <div>
            <h5>Phone:</h5>
            <p>010-020-0340</p>
          </div>
          
          <div>
            <h5>Email:</h5>
            <p>info@company.com</p>
          </div>
          <div>
            <h5>Office Location:</h5>
            <p>North Miami Beach</p>
          </div>
          <div>
            <h5>Social Media:</h5>
            <p>Facebook, Instagram, Behance, Linkedin</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Aboutus;
