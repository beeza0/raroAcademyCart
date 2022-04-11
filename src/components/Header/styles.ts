import styled from "styled-components";

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem 2rem;
  margin-bottom: 1.6rem;
  background-color: ${({ theme }) => theme.colors.primary};

  > svg {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.black};
    width: 3rem;
  }
`;

export const ShoppingContainer = styled.div`
  display: flex;
  height: 3rem;
  cursor: pointer;
`;

export const CartQuantityIcon = styled.span`
  background-color: white;
  color:  ${({ theme }) => theme.colors.primary};
  width: 1.5rem;
  height: 1.5rem;
  text-align: center;
  border-radius: 1rem;
  margin-left: -1rem;
`;
