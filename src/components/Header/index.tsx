import { Dispatch, SetStateAction } from "react";
import { ShoppingBagOutline as ShoppingIcon } from "styled-icons/evaicons-outline";
import useCartContext from "../../context/cart";

import { Wrapper } from "./styles";

type HeaderProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const Header = ({ setIsOpen }: HeaderProps) => {

  const cartList = useCartContext(state => state.cartList)
  const reload = useCartContext(state => state.reload)

  const quantityOnCart = (): number => {
    let numberOfItems = 0
    cartList.forEach(item => {
      numberOfItems = numberOfItems + item.quantity
    })
    return numberOfItems
  }

  return (
    <Wrapper>
      <ShoppingIcon onClick={() => setIsOpen(true)} aria-label="Shopping Icon" />
      {cartList.length > 0 &&
        <div style={{backgroundColor: 'red', color: 'white'}}>{quantityOnCart()}</div>
      }
    </Wrapper>
  )
}

export default Header;
