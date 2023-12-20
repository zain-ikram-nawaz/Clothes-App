import Button from "..//buttton";
function imageGallery() {
 

return (
    <div>
      <div className="xs:block text-white sm:leading-10 mt-10 lg:grid max-auto grid-cols-2 gap-5  2xl:grid max-auto grid-cols-2 gap-5 lg:mb-[10%] xl:grid max-auto grid-cols-2 gap-5 lg:mb-[10%]">
        <div className="bg-[url('/left-banner-image.jpg')] xs: h-[50vh] bg-center bg-cover border-8 sm:h-[50vh] md:h-[70vh] md:flex md:items:center  lg:h-[82vh] xl:h-[82vh] flex justify-center items-center 2xl:h-[82vh]">
          <div className="">
            <h1 className="xs:text-5xl sm:text-6xl md:text-6xl 2xl:text-6xl">We Are Hexashop</h1>
            <p className="md:leading-10 2xl:leading-10">Awesome, clean & creative HTML5 Template</p>
            <Button>Purchase</Button>
          </div>
        </div>
        <div className=" lg:grid max-auto grid-cols-2 gap-5 xl:grid max-auto grid-cols-2 gap-5 2xl:grid max-auto grid-cols-2 gap-5">
          <div className="banner-hover bg-[url('/baner-right-image-01.jpg')] xs:h-[50vh] bg-center bg-cover  border-8 mt-2 sm:h-[50vh] md:h-[70vh] lg:mt-0 h-[40vh] flex lg:justify-center xl:mt-0 flex xl:flex xl:justify-center items-center 2xl:mt-0 2xl:justify-center">
            <div className="hover-effect pt-20">
              <h3>Women</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                explicabo consequuntur minus quidem facilis at autem amet ut
              </p>
              <Button>Discover More</Button>
            </div>
            
            <div className=" zain xs:pl-[17%] pt-[15%] sm:pl-[20%] pt-[35%] md:pl-[20%] pt-[25%] 2xl:mt-[-30%] ">
              <h3 className="xs:text-5xl sm:text-6xl md:text-6xl lg:text-2xl 2xl:text-5xl ">Women</h3>
              <p className="">Best Clothes For Women</p>
            </div>
          </div>
          <div className="banner-hover bg-[url('/baner-right-image-02.jpg')] xs:h-[50vh] bg-center bg-cover mt-2 border-8 sm:h-[50vh] md:h-[70vh] lg:mt-0 h-[40vh] flex lg:justify-center xl:mt-0 flex xl:flex xl:justify-center items-center 2xl:mt-0 2xl:justify-center">
            <div className="hover-effect pt-20">
              <h3>Wen</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                explicabo consequuntur minus quidem facilis at autem amet ut
              </p>
              <Button>Discover More</Button>
            </div>
            <div className="zain xs:pl-[17%] pt-[15%] sm:pl-[20%] pt-[35%] md:pl-[20%] pt-[25%] 2xl:mt-[-30%]">
              <h3 className="xs:text-5xl sm:text-6xl md:text-6xl lg:text-2xl 2xl:text-5xl ">Wen</h3>
              <p >Best Clothes For Men</p>
            </div>
          </div>
          <div className="banner-hover bg-[url('/baner-right-image-03.jpg')] xs:h-[50vh] bg-center bg-cover mt-2 border-8 sm:h-[50vh] md:h-[70vh] lg:mt-0 h-[40vh] flex lg:justify-center xl:mt-0 xl:flex xl:justify-center items-center 2xl:mt-0 2xl:justify-center ">
            <div className="hover-effect pt-20">
              <h3 className="xs:text-2xl sm:sm:text-4xl">Kids</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                explicabo consequuntur minus quidem facilis at autem amet ut
              </p>
              <Button>Discover More</Button>
            </div>
            <div className="zain xs:pl-[17%] pt-[15%] sm:pl-[20%] pt-[35%] md:pl-[20%] pt-[25%] 2xl:mt-[-30%]">
              <h3 className="xs:text-5xl sm:text-6xl md:text-6xl lg:text-5xl 2xl:text-6xl ">Kids</h3>
              <p className="">Best Clothes For Kids</p>
            </div>
          </div>
          <div className="banner-hover bg-[url('/baner-right-image-04.jpg')] xs:h-[50vh] bg-center bg-cover mt-2 border-8  sm:h-[50vh] md:h-[70vh] lg:mt-0 h-[40vh] flex lg:justify-center xl:mt-0 flex xl:flex xl:justify-center items-center 2xl:mt-0 2xl:justify-center">
            <div className="hover-effect pt-20">
              <h3 className="xs:text-2xl ">Accessories</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                explicabo consequuntur minus quidem facilis at autem amet ut
              </p>
              <Button>Discover More</Button>
            </div>
            <div className="zain xs:pl-[17%] pt-[15%] sm:pl-[20%] pt-[35%] md:pl-[20%] pt-[25%] 2xl:mt-[-30%]">
              <h3 className="xs:text-5xl sm:text-6xl md:text-6xl lg:text-2xl 2xl:text-5xl ">Accessories</h3>
              <p>Best Trend Accessories</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default imageGallery;
