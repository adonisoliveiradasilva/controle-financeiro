import React from 'react'
import * as C from "./styles"; 
import Card from '../resumeItem';
import{
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,
} from "react-icons/fa";

export const Resumo = ({income, expense, total}) => {
  return (
    <C.Container>   
        <Card title="Entradas" Icon={FaRegArrowAltCircleUp} value={income}/>
        <Card title="Saidas" Icon={FaRegArrowAltCircleDown}  value={expense}/>
        <Card title="Total" Icon={FaDollarSign}  value={total}/>
    </C.Container>
  )
}

export default Resumo;
