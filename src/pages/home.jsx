import * as React from 'react';
import styled from 'styled-components';
import { ServiceCard } from '../components/serviceCard';

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
  gap:10%;
  margin-top:10%;
`

export const Home = (props) =>{
    return (
      <Wrapper> 
        <CardList>
          <ServiceCard/>
          <ServiceCard/>
          <ServiceCard/>
          <ServiceCard/>
          <ServiceCard/>
          <ServiceCard/>
          

        </CardList>
      </Wrapper>
    );
  }