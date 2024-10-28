import styled from "styled-components";

export const TagForm = styled.form`
  margin-bottom: 2rem;

  &.inline {
    display: flex;
    align-items: center;
    gap: 10px;

    label {
      margin-bottom: 0;
    }
  }

  &.stacked {
    display: flex;
    flex-direction: column;

    label {
      margin-bottom: 8px;
    }
  }

  label {
    font-size: 0.75rem;
    font-weight: bold;
  }

  select {
    border: 1px solid #d5d5d5;
    width: 16.5625rem;
    height: 2rem;
    padding: 0.5rem;
    border-radius: 8px;
    color: #888;
  }

  input {
    border: 1px solid #d5d5d5;
    width: 16.5625rem;
    height: 2rem;
    padding: 0.5rem;
    border-radius: 8px;
    color: #888;

    &:focus {
      border-color: #e40f0f;
      outline: #e40f0f;
    }
  }
`;
