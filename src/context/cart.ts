import create from "zustand"
import { ProductProps } from "../components/Product"

export interface ICartItem extends Omit<ProductProps, "storage"> {
  quantity: number
}

interface ICartContext {
  cartList: ICartItem[],
  setCartList: (item: ICartItem) => void
}

const useCartContext = create<ICartContext>((set) => ({
  cartList: [],
  setCartList: (item: ICartItem) => set(({ cartList }) => {
    cartList.push(item)   
  })
}))

export default useCartContext;
