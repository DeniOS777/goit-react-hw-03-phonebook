import styled from 'styled-components';

export const ContactsItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const ContactName = styled.p`
  font-size: 16px;
`;

export const ContactDelete = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 7px;
  font-size: 16px;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.colors.white};
  border-style: none;
  background-color: ${({ theme }) => theme.colors.red};
  border-radius: 3px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, transform 0.1s ease-in-out;

  &:hover,
  :focus {
    background-color: ${({ theme }) => theme.colors.redHover};
  }

  &:active {
    transform: scale(0.97);
  }
`;
