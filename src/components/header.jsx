import * as React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';



const HeaderBox = styled.div`
  display:flex;
  width:100%;
  height:120px;
  background-color:#3b434b;
  align-items:center;
    font: 'Open Sans', sans-serif;
    position:fixed;
`

const ImageContainer = styled.div`
    display:flex;
`


const Options = styled.ul`
    display:flex;
    margin-right:10%;
    gap:10%;
    justify-content:flex-end;
    align-items:center;
    width:70%;
    height:100%;
`

const Title = styled.div`
    color:white;
    display:flex;
    align-items:center;
    font-size:4.5rem;
    gap:2%;
`

const Option = styled.li`
    color:${p=> p.color || 'white'};
    font-size:1.5rem;
    white-space: nowrap;

`
const Nav = styled.nav`
    display:flex;
    margin-left:20%;
    width:100%;
    gap:15%;
    height:100%;
`


const HeaderOpt = ({children}) =>{

    const [color, setColor] = React.useState(null);
    return(
        <Option
            onMouseEnter={()=>{setColor('red')}}
            onMouseLeave={()=>{setColor(null)}}
            color={color}>
            {children}
        </Option>
    )
}


export const Header = (props) =>{
    return (
      <HeaderBox>
          
          <Title> 
            <p style = {{fontWeight:700}}>CASSIO  </p>
            <p style = {{ fontWeight:100, fontSize:'3.5rem'}}>SERVIÇOS</p>
          </Title>
        
          <Nav> 
                <Options style={{listStyleType:'none'}}>
        
                    <Link to = '/' style={{textDecoration:'none'}}> <HeaderOpt> Home </HeaderOpt> </Link>
                    <Link to = '/servicos-contratados' style={{textDecoration:'none'}}> <HeaderOpt> Serviços contratados </HeaderOpt> </Link>
                    <Link to = '/meus-servicos' style={{textDecoration:'none'}}> <HeaderOpt> Meus serviços </HeaderOpt> </Link>

                </Options>
          </Nav>
      </HeaderBox>
    );
  }