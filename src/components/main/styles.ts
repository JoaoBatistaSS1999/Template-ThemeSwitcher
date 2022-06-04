import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  p {
    padding: 20px;
    width: 300px;
    color: ${({ theme }) => theme.colors.textColor};
    background: ${({ theme }) => theme.colors.primary};
  }
`;
