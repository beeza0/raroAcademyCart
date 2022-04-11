import { useEffect, useState } from "react"
import Incrementor from "../Incrementor"
import { Wrapper, Info, Column, Text, WrapperIncrementor, WrapperImg } from "./styles"
import useCartContext from "../../context/cart";
import { priceFormat } from "../../utils/priceFormat";

export type ProductProps = {
  id: number;
  name: string;
  price: number;
  picture: string;
  storage: number;
  initialQuantity: number
};

const Product = (props: ProductProps) => {
  
  const { name, price, picture, storage, initialQuantity } = props
  const [quantity, setQuantity] = useState<number>(initialQuantity)
  const changeCartlist = useCartContext(state => state.setCartList)

  useEffect(() => {
    setQuantity(initialQuantity)
  }, [initialQuantity])

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
        <Column>
          <Text>{name}</Text>
          <Text>{priceFormat.format(price)}</Text>
        </Column>
        <WrapperIncrementor>
          <Incrementor quantity={quantity} changeQuantity={changeQuantity} />
        </WrapperIncrementor>
      </Info>
    </Wrapper>
  )
}

export default Product;
