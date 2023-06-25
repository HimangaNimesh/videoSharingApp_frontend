import React from 'react'
import styled from 'styled-components'
import Comment from './Comment'

const Container = styled.div``
const NewCommment = styled.div`
    display:flex;
    align-items:center; 
    gap: 15px;
`
const Avatar = styled.img`
    width:36px;
    height:36px;
    border-radius:50%;
    background-color: #999;
`
const Input = styled.input`
    border:none;
    border-bottom: 1px solid ${({theme}) => theme.soft};
    background-color: transparent;
    padding: 5px;
    outline: none;
    width: 100%;
    color: ${({theme}) => theme.text}; 
`

const Comments = () => {
  return (
    <Container>
        <NewCommment>
            <Avatar src='https://avatars.githubusercontent.com/u/85472894?s=400&u=69ea9880abf61a867361b91d914e8075c12ed204&v=4'/>
            <Input placeholder='Add a comment...'/>
        </NewCommment>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
        <Comment/>
    </Container>
  )
}

export default Comments