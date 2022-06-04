import axios from 'axios';
import * as React from 'react';
import styled from 'styled-components';
import { ServiceCard } from '../components/serviceCard';
import {services} from '../services';
const Wrapper = styled.div`
  width:100%:
  height:100%;
  display:flex;
  justify-content:center;
  overflow:auto;
`

const CardList = styled.div`
  display:flex;
  width:60%;
  margin-left:5%;
  flex-direction:column;
  gap:3%;
  margin-top:10%;
`
 //Id = id;
    // NomeServico = nomeServico;
    // Descricao = descricao;
    // Categoria = categoria;
    // Valor = valor;
    //endereço
    //usuario

    // const cardList = axios.get()
    
export const Home = (props) =>{
  const {id} = React.useId();  
  return (
      <Wrapper> 
         
          <CardList>
          {services.map(card =>(
            <ServiceCard 
              name={card.nomeServico} 
              description={card.descricao } 
              category = {card.categoria}
              value={card.valor}
              key={id}
            />
          ))}
        </CardList>
 
      </Wrapper>
    );
  }