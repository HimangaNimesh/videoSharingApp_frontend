import React from 'react'
import styled from 'styled-components'

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

`
const Details = styled.div`
  
`
const Info = styled.span`
  
`
const Buttons = styled.div`
  
`
const Button = styled.div`
  
`

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <iframe
            width="100%"
            height="720"
            src='https://www.youtube.com/watch?v=ei6nKsXXMbY'
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
            
          </Buttons>
        </Details>
      </Content>
      <Recomandation>Recomandation</Recomandation>
    </Container>
  )
}

export default Video