import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Container = styled.div`
    width:360px;
    margin-bottom:45px;
    cursor: pointer;
`
const Image = styled.img`
    width:100%;
    height:202px;
    background-color: #999;
`
const Details = styled.div`
    display: flex;
    margin-top:16px;
    gap:12px;
`
const ChannelImg = styled.img`
    width:36px;
    height:36px;
    border-radius:50%;
    background-color: #999;
`
const Texts = styled.div``
const Title = styled.h1`
    font-size:16px;
    font-weight:500;
    color: ${({theme}) => theme.text};    
`
const ChannelName = styled.h2`
    font-size:14px;
    color: ${({theme}) => theme.textSoft}; 
    margin: 9px 0; 
`
const Info = styled.div`
    font-size:14px;
    color: ${({theme}) => theme.textSoft}; 
`

const Card = () => {
  return (
    <Link to="/video/test" style={{textDecoration:"none"}}>
    <Container>
        <Image src='https://i.ytimg.com/vi/KqisOvcs9z0/maxresdefault.jpg'/>
        <Details>
            <ChannelImg src='https://avatars.githubusercontent.com/u/85472894?s=400&u=69ea9880abf61a867361b91d914e8075c12ed204&v=4'/>
            <Texts>
                <Title>Let's learn React</Title>
                <ChannelName>HimaBro</ChannelName>
                <Info>253,521 views 10 days ago</Info>
            </Texts>
        </Details>
    </Container>
    </Link>
  )
}

export default Card