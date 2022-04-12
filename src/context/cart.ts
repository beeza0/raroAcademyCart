import create from "zustand"
import { ProductProps } from "../components/Product"

interface ICartItem extends ProductProps {
  quantity: number
}

interface ICartContext {
  reload: boolean,
  cartList: ICartItem[],
  setCartList: (item: ICartItem) => void
}

export const searchItem = (list: ICartItem[], id: number): number => {
  let indexOf = -1
  list.forEach((element, index) => {
    if(element.id === id) indexOf = index 
  })
  return indexOf
} 

const useCartContext = create<ICartContext>((set) => ({
  reload: false,
  cartList: [],
  setCartList: (item: ICartItem) => set(({ cartList, reload }) => {
    const index = searchItem(cartList, item.id)
    if(index >= 0) {
      if(item.quantity > 0) {
        cartList.splice(index, 1, item)
        return {cartList, reload: !reload}
     }
     else {
       return { cartList: cartList.filter(product => product.id !== item.id), reload: !reload}
     } 
    }
    else {
      cartList.push(item)
      return {cartList, reload: !reload}
    }
  })
}))

export default useCartContext;
