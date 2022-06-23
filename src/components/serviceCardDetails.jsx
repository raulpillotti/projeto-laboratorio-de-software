import * as React from 'react';
import styled from 'styled-components';
import { FaWindowMinimize } from 'react-icons/fa';
import { Button, Rating, Typography } from '@mui/material';
import { ConfirmPurchasePopup } from './confirmPurchasePopup';

export const ServiceCardDetails = (props) =>{

  const DetailsWrapper = styled.div`
  display:flex;
  flex-direction:column;
  height:400px;
  background:#edf0ee;
  margin-bottom:15px;
  border-radius:10px;
  border:1px solid black;
  border-left 20px solid red;
`
  const CloseButton = styled.div`
    align-self:flex-end;
    margin-right:0.5%;
    outline:none;
  `
  const TitleField = styled.div`
    display:flex;
    width:100%;
    font-size:25px;
    font-weight:bold;
    width:100%;
    justify-content:center;
`
const DescriptionField = styled.div`
  margin-top:3%;
  margin-bottom:5%;
  font-size:20px;
  margin-left:15px;
  height:40%;

`
const AddressField = styled.div`
  argin-top:3%;
  margin-bottom:5%;
  font-size:15px;
  margin-left:15px;
  height:10%;
`

const ValueField = styled.div`
  font-size:20px;
  margin-left:15px;
`

const BuyButton = styled.div`
  align-self:flex-end;
  margin-right:3%;
  margin-bottom:3%;
`

//vai vir como prop
const address = 'Rua Dante Larentis, Cidade Alta, 312 - Bento Gonçalves, RS'
const [showBuyModal, setShowBuyModal] = React.useState(false);
const [evaluation, setEvaluation] = React.useState(0);

const confirmPurchase = () =>{
  //POST PRO USUARIO
  setShowBuyModal(false)
  console.log('TESTEEE')
}

const confirmEvaluation = () =>{
  //post para avaliação
}

// const vals = get da media de avaliação do usuário 
    return (
      <> 
      {showBuyModal ? 
          <ConfirmPurchasePopup name={props.name} onConfirm ={confirmPurchase} onClose={()=>{setShowBuyModal(false)}}/>  
        :
        <DetailsWrapper>
          <CloseButton> 
            <Button style={{color: 'black'}} onClick={(e)=>{
              props.onClose()
            }}>
              <FaWindowMinimize width={150}/>
            </Button>
          </CloseButton>

          <TitleField>{props.name}</TitleField>
          <DescriptionField>{props.description}</DescriptionField>
          <AddressField>{address}</AddressField>
          <ValueField>{`R$${props.value},00`}</ValueField>

          <BuyButton>

            {!props.isSigned ? 
             <Button onClick={()=>{setShowBuyModal(true)}} color='success' variant = 'contained'>
             COMPRAR
           </Button>
           :
            <>
              <Typography component="legend">Avaliar usuário</Typography>
                  <Rating
                  name="simple-controlled"
                  //value vai ser um get da médias de avaliações daquele usuário
                  value={evaluation}
                  onChange={(event, val) => {
                    setEvaluation(val);
                  }}
                />
           </>
          }
        
           
          </BuyButton>
        </DetailsWrapper>
      }
      </>
    );
  }