import { getAllProducts } from "../../service/product"

export default function handler(req, res) {

  const product = getAllProducts()
 res.status(200).json(product)
  }
  