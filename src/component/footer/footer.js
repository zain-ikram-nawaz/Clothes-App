import Image from "next/image";
import { FaFacebookF,FaSquareInstagram,FaTwitter,FaWhatsapp } from "react-icons/fa6";

function Footer (){
    return(
        <div className="mt-60 leading-8 bg-green-900  xs:mt-20 sm: text-center text-white md:mt-[10%]  ">
<div className="lg:grid max-auto grid-cols-4 gap-5 xl:grid max-auto grid-cols-4 gap-5 2xl:grid max-auto grid-cols-4 gap-5 ">
<div >
<Image  className="xs:ml-[30%] pt-[10%] sm:ml-[37%] pt[10%] md:ml-[40%] pt-[10%] lg:ml-10 xl:ml-14 2xl:ml-16 " src="/white-logo.png"  width={150} height={100} ></Image >
<p>6501 Collins Ave, Sunny Isles Beach, 
    <br></br>FL 33160, United States</p>
<p>hexashop@company.com</p>
<p>010-020-0340</p>
</div>

<div className="xs:mt-6 sm:mt-6 md:mt-6 lg:mt-20 xl:mt-20 2xl:mt-[20%]">
    <h5>Shopping & Categorie</h5>
    <p>Men’s Shopping</p>
    <p>Women’s Shopping</p>
    <p>Kid's Shopping</p>
</div>
<div className="xs:mt-6 sm:mt-6 md:mt-6 lg:mt-20 xl:mt-20 2xl:mt-[20%]">
    <h5>Useful Links</h5>
    <p>Homepage</p>
    <p>About Us</p>
    <p>Help</p>
    <p>Contact Us</p>
</div>
<div className="xs:mt-6 sm:mt-6 md:mt-6 lg:mt-20 xl:mt-20 2xl:mt-[20%]">
    <h5>Help & Information</h5>
    <p>Help</p>
    <p>FAQ's</p>
    <p>Shipping</p>
    <p>Tracking ID</p>
</div>
</div>
<div className="xs:mt-6 sm:mt-6 md:mt-6 lg:mt-20 xl:mt-20 2xl:mt-[10%]">
    <hr />
    <p>Copyright © 2022 HexaShop Co., Ltd. All Rights Reserved</p>
    <p>Design: TemplateMo</p>
   <div className="flex justify-center xs:text-2xl mt-6 text-white md:text-3xl">
   <i ><FaFacebookF/></i>
    <i><FaSquareInstagram/></i>
    <i ><FaTwitter/></i>
    <i><FaWhatsapp/></i>
   </div>
    
</div>
 </div>
    );
};

export default Footer;