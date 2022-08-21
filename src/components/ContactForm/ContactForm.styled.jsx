import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 20px;
  width: 370px;
  border: ${({ theme }) => `1px solid ${theme.colors.inputBorder}`};
  border-radius: 3px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-size: 18px;
  letter-spacing: 0.03em;
`;

export const Input = styled.input`
  margin-bottom: 20px;
  padding: 5px 10px;
  font-size: 16px;
  letter-spacing: 0.03em;
  border: ${({ theme }) => `1px solid ${theme.colors.inputBorder}`};
  border-radius: 3px;

  &::placeholder {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.textPlaceholder};
    letter-spacing: 0.03em;
  }
`;

export const AddContact = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.green};
  border-style: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, transform 0.1s ease-in-out;

  &:hover,
  :focus {
    background-color: ${({ theme }) => theme.colors.greenHover};
  }

  &:active {
    transform: scale(0.98);
  }
`;
