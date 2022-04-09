import { Plus as PlusIcon } from "@styled-icons/boxicons-regular/Plus";
import { Subtract as SubtractIcon } from "@styled-icons/remix-fill/Subtract";

import { Wrapper, IconWrapper, Quantity } from "./styles";

type IncrementorProps = {
  quantity: number;
  changeQuantity: (isAdded: boolean) => void
};

const Incrementor = ({ quantity, changeQuantity }: IncrementorProps) => (
  <Wrapper>
    <IconWrapper>
      <SubtractIcon aria-label="Subtract item" onClick={() => changeQuantity(false)}/>
    </IconWrapper>

    <Quantity>{quantity}</Quantity>

    <IconWrapper>
      <PlusIcon aria-label="Add item" onClick={() => changeQuantity(true)}/>
    </IconWrapper>
  </Wrapper>
);

export default Incrementor;
