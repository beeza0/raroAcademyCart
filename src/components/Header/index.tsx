import { Dispatch, SetStateAction } from "react";
import { ShoppingBagOutline as ShoppingIcon } from "styled-icons/evaicons-outline";
import useCartContext from "../../context/cart";

import { Wrapper, ShoppingContainer, CartQuantityIcon } from "./styles";

type HeaderProps = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const Header = ({ setIsOpen }: HeaderProps) => {

  const cartList = useCartContext(state => state.cartList)
  const reload = useCartContext(state => state.reload)

  const quantityOnCart = (): number => {
    const initialValue = 0
    return cartList.reduce((previousValue, item) => 
      previousValue + item.quantity, initialValue
    )
  }

  return (
    <Wrapper>
      <ShoppingContainer onClick={() => setIsOpen(true)} >
        <ShoppingIcon aria-label="Shopping Icon" />
          <CartQuantityIcon>{quantityOnCart()}</CartQuantityIcon>
      </ShoppingContainer>
    </Wrapper>
  )
}

export default Header;
