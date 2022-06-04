import * as React from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';
import { FaWindowClose } from 'react-icons/fa';


const ModalBox = styled.div`
    width:700px;
    height:200px;
    border: 1px solid black;
    border-radius:10px;
    background:#edf0ee;
    display:flex;
    flex-direction:column;
    `
const MainTitleText = styled.div`
    width:100%;
    font-size:20px;
    margin-left:3%;
    height:80%;
`

const ConfirmButton = styled.div`
    align-self:flex-end;
    margin-right:2%;
    margin-bottom:1%;
`
const QuitButton = styled.div`
    margin-right:0.3%;
    margin-top:0.3%;
    align-self:flex-end;
`

export const ConfirmPurchasePopup = (props)=>{
    return(
        <ModalBox>
            <QuitButton>
                <Button color = 'error' variant = 'contained' onClick={()=>{props.onClose()}}><FaWindowClose/> </Button>
            </QuitButton>
            <MainTitleText>{`Confirmar aquisição de ${props.name}?`}</MainTitleText>
            <ConfirmButton>
                <Button color = 'success' variant = 'contained' onClick={()=>{props.onConfirm()}}>Confirmar</Button>
            </ConfirmButton>
        </ModalBox>
    )
}
   