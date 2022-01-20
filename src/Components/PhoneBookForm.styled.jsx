import styled from '@emotion/styled';

export const Form = styled.form`
   width: 400px;
   padding: 12px;
   border: 2px solid black;
   margin: 0 0 0 15px;
`;

export const Label = styled.label`
   display: block;
   margin: 0 0 10px 0;
`;

export const Input = styled.input`
   display: block;
   margin: 0 0 15px 0;
`;

export const SubmitButton = styled.button`
   cursor: pointer;
   border: none;
   border-radius: 4px;
   padding: 4px 6px 4px 6px;
   &:hover,
   &:focus {
       background-color: #7ac2f1;
       color: white;
       border: none; 
   };
`;