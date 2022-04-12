import { Dispatch, SetStateAction } from "react";
import { CloseOutline } from "@styled-icons/evaicons-outline";

import Button from "../Button";
import Typography from "../Typography";

import { Wrapper, Subtotal, Header } from "./styles";
import useCartContext from "../../context/cart";
import Product from '../Product'
import { priceFormat } from "../../utils/priceFormat";

export type MenuPaymentProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const MenuPayment = ({ isOpen, setIsOpen }: MenuPaymentProps) => {

  const cartList = useCartContext(state => state.cartList)
  const reload = useCartContext(state => state.reload)

  const renderCartItems = () => 
    cartList.map(item => {
      return <Product {...item} initialQuantity={item.quantity} key={item.id}/>
    })  
    
    const calcTotalPrice = () : number => {
      let total = 0
      cartList.forEach(item => {
        total = total + item.price*item.quantity
      })
      return total
    }


  return(
    <Wrapper isOpen={isOpen}>
      <Header>
        <Typography level={5} size="large" fontWeight={600}>
          {renderCartItems()}
        </Typography>
        <CloseOutline onClick={() => setIsOpen(false)} />
      </Header>

      <Subtotal>
        <Typography level={5} size="large" fontWeight={600}>
          Total
        </Typography>
        <Typography>{priceFormat.format(calcTotalPrice())}</Typography>
      </Subtotal>

      <Button fullWidth>Finalizar compra</Button>
    </Wrapper>
  )
}
export default MenuPayment;
