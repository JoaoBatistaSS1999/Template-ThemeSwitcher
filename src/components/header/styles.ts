import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 60px;

  color: ${({ theme }) => theme.colors.textColor};
  background: ${({ theme }) => theme.colors.primary};

  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
  width: 100px;
  height: 40px;
  color: ${({ theme }) => theme.colors.lightGray};
  background: ${({ theme }) => theme.colors.secondary};
`;
