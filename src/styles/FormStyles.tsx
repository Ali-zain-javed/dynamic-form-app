import styled from "styled-components";

export const FormContainer = styled.div`
  max-width: 450px;
  margin: 0 auto;
  margin-top: 12px;
  padding: 30px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 8px;
  }

  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }
`;

export const FieldGroup = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;

export const ThankYouContainer = styled.div`
  text-align: center;

  h1 {
    margin-bottom: 20px;
  }

  div {
    text-align: left;
    max-width: 400px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
  }
`;
