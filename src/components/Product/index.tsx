import { useState } from "react"
import Incrementor from "../Incrementor"
import { Wrapper, Info, Column, Text, WrapperIncrementor, WrapperImg, WrapperButton, WrapperSubcontainer } from "./styles"
import useCartContext from "../../context/cart";

export type ProductProps = {
  id: number;
  name: string;
  price: number;
  picture: string;
  storage: number;
};

const Product = (props: ProductProps) => {
  
  const { name, price, picture, storage } = props
  const [quantity, setQuantity] = useState<number>(0)

  const changeCartlist = useCartContext(state => state.setCartList)
  const cartlist = useCartContext(state => state.cartList)

  const changeQuantity = (isAdded: boolean) : void => {
    if((isAdded && quantity !== storage) || (!isAdded && quantity !== 0)) {
      const newQuantity = isAdded ? quantity + 1 : quantity - 1
      setQuantity(newQuantity)
      changeCartlist({...props, quantity: newQuantity})
    }
  }

  return (
    <Wrapper>
      <WrapperImg src={picture} alt={`Imagem de referência ${name}`} />
      <Info>
        {console.log(cartlist)}
        <Column>
          <Text>{name}</Text>
          <Text>{`R$${price.toString().split('.').join(',')}`}</Text> {/*casa de milhar tem que ser com ponto*/}
        </Column>
        <WrapperSubcontainer>
          <WrapperIncrementor>
            <Incrementor quantity={quantity} changeQuantity={changeQuantity} />
          </WrapperIncrementor>
          <WrapperButton>Adicionar ao carrinho</WrapperButton> {/*tirar botão*/}
        </WrapperSubcontainer>
      </Info>
    </Wrapper>
  )
}

export default Product;
