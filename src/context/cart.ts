import create from "zustand"
import { ProductProps } from "../components/Product"

export interface ICartItem extends ProductProps {
  quantity: number
}

interface ICartContext {
  reload: boolean
  cartList: ICartItem[],
  setCartList: (item: ICartItem) => void
}

const useCartContext = create<ICartContext>((set) => ({
  reload: false,
  cartList: [],
  setCartList: (item: ICartItem) => set(({ cartList }) => {
    if(cartList.filter(element => element.id === item.id).length > 0) {
      if(item.quantity > 0) {
        cartList.forEach((product, index) => {
          if(product.id === item.id) {
            cartList.splice(index, 1, item)
            set(({ reload }) => ({ reload: !reload }))
          }
        })
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
