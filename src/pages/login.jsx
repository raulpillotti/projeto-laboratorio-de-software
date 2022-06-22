import axios from 'axios';
import * as React from 'react';
import styled from 'styled-components';
import { FormControl, InputLabel, Input, Select, MenuItem, Button } from '@mui/material';
import {Link} from 'react-router-dom';


const Wrapper = styled.div`
  width:100%:
  height:100%;
  display:flex;
  justify-content:center;
  overflow:auto;
`
const Inputs = styled.div`
    margin-top:10%;
    display:flex;
    width:30%;
    flex-direction:column;
`

export const Login = (props) =>{
 
    const email = React.useRef('');
    const password = React.useRef('');

    const login = () =>{
    }

  return (
      <Wrapper> 
        <Inputs> 
          <FormControl fullWidth style={{marginBottom:'5%'}}>
                <InputLabel htmlFor={'email'}>{'Email'}</InputLabel>
                    <Input onChange={(e)=> {email.current = e.target.value}} id={'email'}/>
            </FormControl>

            <FormControl fullWidth>
                <InputLabel fullWidth htmlFor={'senha'}>{'senha'}</InputLabel >
                    <Input type='password' onChange={(e)=> {password.current = e.target.value}} id={'senha'} fullWidth/>
            </FormControl>

        <Link to = '/home' style={{textDecoration:'none'}}> <Button onClick={login()}>Ir</Button> </Link>
        </Inputs>
 
      </Wrapper>
    );
  }