import React from 'react'
import styled from 'styled-components'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'

const Container = styled.div`
  position: sticky,
  top:0;  
  background-color: ${({theme}) => theme.bgLighter};
  height: 56px;
`
const Wrapper = styled.div`
  display: flex;
  align-items:center;
  height: 100%;
  padding: 0 20px;
  position: relative;
  justify-content: flex-end;
`
const Search = styled.div`
  width:40%;
  position: absolute;
  left:0;
  right:0;
  margin:auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #ccc;
`
const Input = styled.input`
  border:none;
  background: transparent;
`
const Button = styled.button`
    padding: 5px 15px;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    border-radius: 3px;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
`

const Navbar = () => {

  const {currentUser} = useSelector(state=> state.user)

  return (
    <Container>
      <Wrapper>
        <Search>
          <Input placeholder='Search'/>
          <SearchIcon/>
        </Search>
        {currentUser? (
          "user"
        ): (
          <Link to="signin" style={{textDecoration: "none"}}>
        <Button>
          <AccountCircleIcon/>
          Signin
        </Button> 
        </Link>)}
      </Wrapper>
    </Container>
  )
}

export default Navbar