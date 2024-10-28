import styled from "styled-components";

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  text-align: left;
`;

export const TagH = styled.h3`
  font-weight: bold;
  text-align: left;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;
  max-width: 100%;
`;

// Definindo o botão estilizado
export const AddPokemonButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  border: 2px solid #000;
  border-radius: 25px;
  background-color: transparent;
  color: #000;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  margin-bottom: 1rem;

  &:hover {
    background-color: #ccc;
  }

  span {
    margin-left: 10px;
    font-size: 18px;
  }
`;

export const SummaryContainer = styled.div`
  width: 550px;
  margin-top: 30px;
  border-top: 1px solid #e0e0e0;
  padding-top: 20px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #e0e0e0;
`;

export const Label = styled.span`
  font-weight: bold;
  color: #888;
`;

export const Value = styled.span`
  color: #555;
`;

export const TaxInfo = styled.p`
  font-size: 0.9em;
  color: #999;
  margin-top: 10px;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  gap: 150px;
  margin-bottom: 30px;
`;

export const TotalValue = styled.span`
  font-size: 1.2em;
  font-weight: bold;
  color: #333;
`;

export const ConcludeButton = styled.button`
  width: 200px;
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
