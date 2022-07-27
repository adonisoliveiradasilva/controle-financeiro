import styled from "styled-components";
export const Container = styled.div`
    max-width: 1120px;
    width: 98%;
    margin: 20px auto;
    background-color: #fff;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    display: flex;
    gap: 10px;  
    justify-content: center;

    @media (max-width: 750px){
        display: grid;
    }
`;

export const InputContent = styled.div`
    display: flex;
    flex-direction: column;
    margin: 30px;
`;

export const Label = styled.label``;

export const Input = styled.input`
    outline: none;
    border-radius: 5px;
    padding: 5px;
    font-size: 15px;
    border: 1px solid #ccc;
`;

export const RadioGroup = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;

    input{
        margin-left: 20px;
        margin-right: 10px;
        accent-color: black;
        margin-top: 0;
    }
`;

export const Button = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 100%;
  cursor: pointer;
  color: white;
  background-color: teal;
  margin-top: auto;
  margin-bottom: auto;
  height: 30px;
  width: 30px;

  @media (max-width: 750px){
    margin-top: 50px;
    margin-bottom: 50px;
    margin-left: auto;
    margin-right: auto;
    height: 40px;
    width: 40px;
   }
`;


