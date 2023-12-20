import { getAllProducts } from "../../service/product";
import { FaCartPlus, FaRegEye, FaStar } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import Link from "next/link";

function ImageSlider({ products }) {

  const data = products.filter((products)=>
{return products.catogery == "women"})
  // console.log(data)
  if (!data) {
    <p>loading...</p>;
  }
  return (
    <div className=" mt-16 text-center mb-10 ">
      <div>
       
        <div>
          <h2 className="">Women's Latest</h2>
          <p className="mt-6 mb-6">
            Details to details is what makes Hexashop different from the other
            themes.
          </p>
        </div>
        {/* backend start insha Allah it will work soon */}
        <div>
          <Swiper
            slidesPerView={1}
            // spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
          >
            <div>
              <SwiperSlide>
                {data.slice(0, 1).map((item, ind) => {
                  return (
                    <div key={ind} className="flex justify-center ">
                      <div>
                        <Image
                          className="w-[100vw] md:w-[50vw] 2xl:w-[30vw] xl:w-[40vw] lg:w-[50vw]"
                          src={item.imageUrl}
                          width={500}
                          height={300}
                          alt={item.title}
                        />
                        <div>
                          <ul className="bg-green-900 flex h-[7vh] justify-between text-white items-center text-3xl">
                            <Link href={`products/${item.id}`}>
                              <li>
                                <i>
                                  <FaCartPlus />
                                </i>
                              </li>
                            </Link>
                            <li>
                              <i>
                                <FaRegEye />
                              </i>
                            </li>
                            <li>
                              <i>
                                <FaStar />
                              </i>
                            </li>
                          </ul>
                        </div>
                        <div className="h-[12vh] text-3xl mt-8">
                          <h5 className="text-3xl sm:text-4xl xs:text-4xl">
                            {item.title}{" "}
                          </h5>
                          <p>${item.prize}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </SwiperSlide>
            </div>
            <div>
              <SwiperSlide>
                {data.slice(1, 2).map((item, ind) => {
                  return (
                    <div key={ind} className="flex justify-center ">
                      <div>
                        <Image
                          className="w-[100vw] md:w-[50vw] 2xl:w-[30vw] xl:w-[40vw] lg:w-[50vw]"
                          src={item.imageUrl}
                          width={500}
                          height={300}
                          alt={item.title}
                        />
                        <div>
                          <ul className="bg-green-900 flex h-[7vh] justify-between text-white items-center text-3xl">
                            <Link href={`products/${item.id}`}>
                              <li>
                                <i>
                                  <FaCartPlus />
                                </i>
                              </li>
                            </Link>
                            <li>
                              <i>
                                <FaRegEye />
                              </i>
                            </li>
                            <li>
                              <i>
                                <FaStar />
                              </i>
                            </li>
                          </ul>
                        </div>
                        <div className="h-[12vh] text-3xl mt-8">
                          <h5 className="text-3xl sm:text-4xl xs:text-4xl">
                            {item.title}{" "}
                          </h5>
                          <p>${item.prize}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </SwiperSlide>
            </div>
            <div>
              <SwiperSlide>
                {data.slice(2, 3).map((item, ind) => {
                  return (
                    <div key={ind} className="flex justify-center ">
                      <div>
                        <Image
                          className="w-[100vw] md:w-[50vw] 2xl:w-[30vw] xl:w-[40vw] lg:w-[50vw]"
                          src={item.imageUrl}
                          width={500}
                          height={300}
                          alt={item.title}
                        />
                        <div>
                          <ul className="bg-green-900 flex h-[7vh] justify-between text-white items-center text-3xl">
                            <Link href={`products/${item.id}`}>
                              <li>
                                <i>
                                  <FaCartPlus />
                                </i>
                              </li>
                            </Link>
                            <li>
                              <i>
                                <FaRegEye />
                              </i>
                            </li>
                            <li>
                              <i>
                                <FaStar />
                              </i>
                            </li>
                          </ul>
                        </div>
                        <div className="h-[12vh] text-3xl mt-8">
                          <h5 className="text-3xl sm:text-4xl xs:text-4xl">
                            {item.title}{" "}
                          </h5>
                          <p>${item.prize}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </SwiperSlide>
            </div>
            <div>
              <SwiperSlide>
                {data.slice(3, 4).map((item, ind) => {
                  return (
                    <div key={ind} className="flex justify-center ">
                      <div>
                        <Image
                          className="w-[100vw] md:w-[50vw] 2xl:w-[30vw] xl:w-[40vw] lg:w-[50vw]"
                          src={item.imageUrl}
                          width={500}
                          height={300}
                          alt={item.title}
                        />
                        <div>
                          <ul className="bg-green-900 flex h-[7vh] justify-between text-white items-center text-3xl">
                            <Link href={`products/${item.id}`}>
                              <li>
                                <i>
                                  <FaCartPlus />
                                </i>
                              </li>
                            </Link>
                            <li>
                              <i>
                                <FaRegEye />
                              </i>
                            </li>
                            <li>
                              <i>
                                <FaStar />
                              </i>
                            </li>
                          </ul>
                        </div>
                        <div className="h-[12vh] text-3xl mt-8">
                          <h5 className="text-3xl sm:text-4xl xs:text-4xl">
                            {item.title}{" "}
                          </h5>
                          <p>${item.prize}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
export default ImageSlider;

export async function getStaticProps() {
  const womens = await getAllProducts();
  return {
    props: {
      products: womens,
    },
    revalidate: 10,
  };
}
