import { useState, useEffect } from "react";
import Cart from "../components/Cart";
import { Container } from "../components/Container";
import Header from "../components/Header";
import Product, { ProductProps } from "../components/Product";
import api from '../services/api'

const Home = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState<Array<ProductProps>>([])

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    const response = await api.get(`/products`)
    setProducts(response.data)
  }

  const renderProducts = () => 
    products.map((product) => {
      return <Product {...product}/>
    })


  return (
    <>
      <Header setIsOpen={setIsOpen} />
      <Container>
        {renderProducts()}
        <Cart isOpen={isOpen} setIsOpen={setIsOpen} />
      </Container>
    </>
  );
};

export default Home;
