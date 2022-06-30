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

    const [throwError, setThrowError] = React.useState(false);

    const login = () =>{

      // axios.get("http://localhost:5000/Api/Login", {params:{email:email, senha:password}}, {headers:{ "Access-Control-Allow-Origin": "*",}})
      // .then(r => {

        const teste = email.current === 'admin' && password.current === 'admin';
        if(teste){
          window.location = "http://localhost:3000/home";
        }else{
          setThrowError(true);
        }
      // })
      // .catch(err => console.log(err))
    }

  return (
      <Wrapper> 
     
        <Inputs> 
   
          <FormControl fullWidth style={{marginBottom:'5%'}}>
                <InputLabel htmlFor={'email'}>{'Email'}</InputLabel>
                    <Input onChange={(e)=> {
                      if(throwError) setThrowError(false);
                      email.current = e.target.value
                    }} id={'email'}/>
            </FormControl>

            <FormControl fullWidth>
                <InputLabel fullWidth htmlFor={'senha'}>{'senha'}</InputLabel >
                    <Input type='password' onChange={(e)=> {
                      if (throwError) setThrowError(false);
                      password.current = e.target.value
                      }} id={'senha'} fullWidth/>
            </FormControl>

        <Button onClick={login}>Ir</Button> 
        {throwError &&
          <div style={{height:'20%'}}> 
            <p style={{color:'red'}}>Usuário ou senha inválidos</p>
          </div>
        }
        </Inputs>
 
      </Wrapper>
    );
  }