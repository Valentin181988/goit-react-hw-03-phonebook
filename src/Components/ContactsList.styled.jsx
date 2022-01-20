import styled from '@emotion/styled';

export const ContactsItem = styled.li`
   &:not(:last-child) {
       margin-bottom: 8px;
   };
`;

export const ContactsButton = styled.button`
   cursor: pointer;
   border: none;
   border-radius: 6px;
   padding: 4px 6px 4px 6px;
   margin: 0 0 0 10px;
   &:hover,
   &:focus {
       background-color: #7ac2f1;
       color: white;
       border: none; 
   };
`;

export const ContactsItemName = styled.span`
    font-size: 20px;
    line-height: 24px;
    font-weight: 400;
    letter-spacing: 0.5px;
`;

export const ContactsItemNumber = styled.span`
    font-size: 20px;
    line-height: 24px;
    font-weight: 500;
    letter-spacing: 0.5px;
`;