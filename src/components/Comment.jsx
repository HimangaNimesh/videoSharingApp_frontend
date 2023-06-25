import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display:flex;
  gap: 10px;
  margin: 30px 0;
`
const Avatar = styled.img`
    width:36px;
    height:36px;
    border-radius:50%;
    background-color: #999;
`
const Details = styled.div`
  display: flex;
  flex-direction:column;
  gap: 10px;
  color: ${({theme}) => theme.text};
`
const Name = styled.span`
  font-size:13px;
  font-weight:500;
`
const Date = styled.span`
  font-size:12px;
  font-weight:400;
  color: ${({theme}) => theme.textSoft};
  margin-left: 5px;
`
const Text = styled.div`
font-size:14px;
`

const Comment = () => {
  return (
    <Container>
      <Avatar src='https://avatars.githubusercontent.com/u/85472894?s=400&u=69ea9880abf61a867361b91d914e8075c12ed204&v=4'/>
      <Details>
        <Name>Himanga Nimesh <Date>1 day ago</Date></Name>
        <Text>Nihil laboriosam inventore consectetur, placeat at rerum ipsam!</Text>
      </Details>
    </Container>
  )
}

export default Comment