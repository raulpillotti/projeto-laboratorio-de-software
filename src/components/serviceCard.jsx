import * as React from 'react';
import styled from 'styled-components';
import { FaStar } from 'react-icons/fa';


const CardWrapper = styled.div`
    display:flex;
    flex-direction:column;
    height:150px;
    background:#edf0ee;
    margin-bottom:15px;
    border-radius:10px;
    border:1px solid black;
    border-left 20px solid red;
`


const ValueField = styled.div`
    margin-left:5%;
`

const TitleField = styled.div`
    display:flex;
    width:100%;
    justify-content:center;
    font-size:20px;
    width:100%;
`


const AddressField = styled.div`
    marin-top:1%:
`


export const ServiceCard = (props) =>{

    //titulo, descricão, anunciante, endereço, avaliação, valor, 
    return (
      <CardWrapper>

        <TitleField>
            Lavagem de veículos
            <ValueField>5 <FaStar/> </ValueField>
        </TitleField>
      Melhor lavagem nao sei oq de ca      Melhor lavagem nao sei oq de carros daquuilfaspkg sdg kdnjssadkgasdog sadgjasdoigjasdoigjasdoi sd
      Melhor lavagem nao sei oq de carros daquuilfaspkg sdg kdnjssadkgasdog sadgjasdoigjasdoigjasdoi sd
rros daquuilfaspkg sdg kdnjssadkgasdog sadgjasdoigjasdoigjasdoi sd
  
        <AddressField> 
        Rua Dante Larentis, 312 Bento Gonçalves, RS

        </AddressField>
        <ValueField>
        R$ 700,00
      </ValueField>
      </CardWrapper>
    );
  }