import prisma from "../database/database";
import db from "../database/database";

const TABLE_NAME = "products";

async function getProducts() {
 // const products = await prisma.products.findmany()
 // return products
}

async function getProduct(id: number) {
//  const product = await prisma.products.findmany({where: {id}})
 // return product
}

async function createProduct(product) {
  // TODO
}

const productRepository = {
  getProduct,
  getProducts,
  createProduct
}

export default productRepository;