import Link from "next/link";
import Button from "../../component/buttton"
function ExploreMore(){
    return(
        <div className="xs:mt-10 md:mt-20 ">
       <div className="mt-20 mb-40 lg:grid grid-cols-4 max-auto xl:grid grid-cols-4 max-auto  2xl:grid grid-cols-4 max-auto"> 
<div className="w-[90%] m-10 lg:col-span-2  xl:col-span-2 2xl:col-span-2  2xl:mt-40">
<h2 className="mb-10">Explore Our Products</h2>
<p className="text-gray-500">You are allowed to use this HexaShop HTML CSS template. You can feel free to modify or edit this layout. You can convert this template as any kind of ecommerce CMS theme as you wish.</p>
<p className="text-2xl my-6"> <q >You are not allowed to redistribute this template ZIP file on any other website.</q> </p>
<p className="text-gray-500">There are 5 pages included in this HexaShop Template and we are providing it to you for absolutely free of charge at our TemplateMo website. There are web development costs for us.</p>
<p className="text-gray-500 mt-5">If this template is beneficial for your website or business, please kindly <Link href="#">support us</Link> a little via PayPal. Please also tell your friends about our great website. Thank you.</p>
<div className="mt-10">

<Button>Discover Me</Button>
</div>


</div>

<div className="xs:mt-10 md:mt-10 lg:col-span-2 lg:grid max-auto grid-cols-4 xl:col-span-2 xl:grid grid-cols-4 bg-red-400 2xl:col-span-2 2xl:grid grid-cols-4" >
    <div className="flex items-center justify-center border-4 bg-gray-500 xs:h-[50vh] sm:h-[50vh] md:h-[80vh] 2xl:h-[40vh]  lg:col-span-2 xl:col-span-2 2xl:col-span-2">
        <div>
        <h2 className="lg:text-3xl">Leather Bags</h2>
        <p>Latest Collection</p>
        </div>
    </div>
    <div className=" border-4 bg-[url('/baner-right-image-02.jpg')] bg-cover bg-center xs:h-[50vh] sm:h-[50vh] md:h-[80vh] 2xl:h-[40vh] lg:col-span-2 xl:col-span-2 2xl:col-span-2 "></div>
    <div className=" border-4 bg-[url('/baner-right-image-01.jpg')] bg-cover bg-center xs:h-[50vh] sm:h-[50vh] md:h-[80vh] 2xl:h-[40vh] lg:w-[25vw] xl:w-[25vw] 2xl:w-[25vw]">

    </div>
    <div className=" flex items-center justify-center  border-4 bg-gray-500 xs:ml-[0%] sm:ml-[0%] md:ml-[0%] xs:h-[50vh] sm:h-[50vh] md:h-[80vh] 2xl:h-[40vh] lg:w-[25vw] ml-[100%] xl:w-[25vw] 2xl:w-[25vw]"> 
   <div>
   <h2 className="text-3xl">Different Types</h2>
 <p>Over 304 Products</p>
   </div>
 </div>
</div>



       </div> 
       </div>
      );
        
    
}

export default ExploreMore;