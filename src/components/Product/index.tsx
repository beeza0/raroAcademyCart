import Incrementor from "../Incrementor";
import { Wrapper, Info, Column, Text, WrapperIncrementor, WrapperImg, WrapperButton, WrapperSubcontainer } from "./styles";

export type ProductProps = {
  id: number;
  name: string;
  price: number;
  picture: string;
};

const Product = ({ id, name, price, picture }: ProductProps) => (
  <Wrapper>
    <WrapperImg src={picture} alt={`Imagem de referência ${name}`} />
    <Info>
      <Column>
        <Text>{name}</Text>
        <Text>{`R$${price.toString().split('.').join(',')}`}</Text> {/*casa de milhar tem que ser com ponto*/}
      </Column>
      <WrapperSubcontainer>
        <WrapperIncrementor>
          <Incrementor id={id} quantity={1} />
        </WrapperIncrementor>
        <WrapperButton>Adicionar ao carrinho</WrapperButton> {/*tirar botão*/}
      </WrapperSubcontainer>
    </Info>
  </Wrapper>
);

export default Product;
