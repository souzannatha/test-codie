import styled from "styled-components";

export const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 80px;
  max-width: 90rem;
  margin: 0 auto;
`;

export const Logo = styled.a<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ isOpen }) => (isOpen ? "260px" : "80px")}; /* Ajuste a largura */
  height: 61px;
  padding: 12px 20px;
  border: none;
  border-radius: 50px;
  background-color: #e40f0f;
  font-size: 0.875rem;
  color: #ffffff;
  font-weight: bold;
  gap: 1.25rem;
  cursor: pointer;
  transition: width 0.3s ease; /* Adicione uma transição suave */
`;

export const TagButton = styled.button`
  width: 172px;
  height: 42px;
  padding: 12px 24px;
  border: none;
  border-radius: 30px;
  background-color: #e40f0f;
  font-size: 14px;
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
  margin-left: 1.875rem;
`;

export const TagAnchor = styled.a`
  font-size: 0.875rem;
  font-weight: 400;
  color: #000000;
  cursor: pointer;
  margin-right: 1.5rem;
`;
