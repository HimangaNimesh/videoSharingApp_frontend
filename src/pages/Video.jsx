import React from 'react'
import styled from 'styled-components'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import AddTaskOutlinedIcon from '@mui/icons-material/AddTaskOutlined';

const Container = styled.div`
  display:flex;
  gap:24px;
`
const Content = styled.div`
  flex:5;
`
const Recomandation = styled.div`
  flex:2;
`
const VideoWrapper = styled.div`
  
`
const Title = styled.h1`
  font-size:18px;
  font-weight:400;
  margin: 20px 0 10px 0;
  color: ${({theme}) => theme.text}
`
const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-between;
`
const Info = styled.span`
color: ${({theme}) => theme.textSoft}
`
const Buttons = styled.div`
  display:flex;
  gap:20px;
  color: ${({theme}) => theme.text} 
`
const Button = styled.div`
  display:flex;
  align-items:center;
  gap:5px;
  cursor:pointer;
`
const Hr = styled.hr`
  margin: 15px 0;
  border: 0.5px solid ${({theme}) => theme.soft}; 
`
const Channel = styled.div`
  display:flex;
  justify-content:space-between;
`
const ChannelInfo = styled.div`
  display:flex;
  gap: 20px;
`
const Subscribe = styled.button`
  background-color:#cc1a00;
  font-weight:500;
  color:white;
  border:none;
  border-radius:3px;
  height:max-content;
  padding:10px 20px;
  cursor:pointer;
`
const ChannelImg = styled.img`
  width:36px;
  height:36px;
  border-radius:50%;
  background-color: #999;
`
const ChannelDetails = styled.div`
  display:flex;
  flex-direction:column;
  color: ${({theme}) => theme.text}; 
`
const ChannelName = styled.span`
  font-weight:500;
`
const ChannelDesc = styled.p`
font-size:14px;
`
const ChannelCounter = styled.span`
  margin: 5px 0 20px 0;
  color: ${({theme}) => theme.textSoft};
  font-size:12px;
`

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="720"
            src='https://www.youtube.com/embed/ei6nKsXXMbY'
            title='Youtube video player'
            frameborder="0"
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        </VideoWrapper>
        <Title>Test Video</Title>
        <Details>
          <Info>456,641 views June 22, 2023</Info>
          <Buttons>
            <Button><ThumbUpOffAltIcon/> 123</Button>
            <Button><ThumbDownOffAltIcon/> Dislike</Button>
            <Button><ReplyOutlinedIcon/> Share</Button>
            <Button><AddTaskOutlinedIcon/> Save</Button>
          </Buttons>
        </Details>
        <Hr/>
        <Channel>
          <ChannelInfo>
            <ChannelImg src='https://avatars.githubusercontent.com/u/85472894?s=400&u=69ea9880abf61a867361b91d914e8075c12ed204&v=4'/>
            <ChannelDetails>
              <ChannelName>HimaBro</ChannelName>
              <ChannelCounter>546k subscribers</ChannelCounter>
              <ChannelDesc>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum aspernatur soluta vel dolores! Error fugiat, quaerat illo soluta pariatur quia, quas aliquam cum aspernatur iusto recusandae nostrum mollitia natus laudantium?</ChannelDesc>
            </ChannelDetails>
          </ChannelInfo>
          <Subscribe>Subscribe</Subscribe>
        </Channel>
      </Content>
      <Recomandation>Recomandation</Recomandation>
    </Container>
  )
}

export default Video