import create from "zustand"
import { ProductProps } from "../components/Product"

interface ICartItem extends ProductProps {
  quantity: number
}

interface ICartContext {
  reload: boolean
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
  setCartList: (item: ICartItem) => set(({ cartList }) => {
    const index = searchItem(cartList, item.id)
    if(index >= 0) {
      if(item.quantity > 0) {
        cartList.splice(index, 1, item)
        set(({ reload }) => ({ reload: !reload }))
     }
     else {
        set(({ cartList }) => ({ cartList: cartList.filter(product => product.id !== item.id) }))
     } 
    }
    else {
      cartList.push(item)
      set(({ reload }) => ({ reload: !reload }))
    }
  })
}))

export default useCartContext;
