import { getAllProducts } from "../../service/product";
import Image from "next/image";
import Button from "../../component/buttton/index"

function singlePost(props) {
  const { products } = props;
  // console.log(products)
  if (!products) {
    return <h2>Loading....</h2>;
  }
  return (
    <div className=" mb-40 mt-20">
      <div>
        <Image
          src="/products-page-heading.jpg"
          width={2000}
          height={200}
          alt="hello"
        ></Image>
      </div>

      <div className=" container mx-auto grid grid-cols-4 mt-40">
        <div className="col-span-2 ">
          <Image
            src={products.imageUrl}
            width={500}
            height={300}
            alt={products.title}
          ></Image>
        </div>
        <div className="col-span-2 mt-40">
          <h2> {products.title}</h2>
          <h4 className="mt-10">
            {products.prize} <i>$</i>
          </h4 >
          <p className=" mt-10 mb-10">{products.description}</p>
          <Button>Add to Card</Button>
        </div>
      </div>
       
    </div>
  );
}

export async function getStaticProps({ params }) {
  const productId = params.id;
  // console.log(productId)

  const data = await getAllProducts()

  const productKey = data.find(
    (product) => product.id.toString() === productId.toString()
  );
  // console.log(productKey);
  return {
    props: {
      products: productKey,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const data = await getAllProducts();
  const paths = data.map((item) => {
    return {
      params: { id: item.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export default singlePost;
