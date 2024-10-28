import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  width: 408px; /* Define a largura do modal */
  height: 255px; /* Define a altura do modal */
  background: white;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #e40f0f; /* Adiciona uma borda sólida de 1px */
  text-align: center;
`;

export const ConcludeButton = styled.button`
  width: 220px;
  height: 42px;
  padding: 12px 12px;
  border: none;
  border-radius: 30px;
  background-color: #e40f0f;
  font-size: 14px;
  color: #ffffff;
  font-weight: bold;
  cursor: pointer;
  margin-left: 1.875rem;

  &:hover {
    background-color: #df8686;
  }
`;
