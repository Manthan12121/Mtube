import React from "react";
import styled from 'styled-components';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import LibraryAddOutlinedIcon from '@mui/icons-material/LibraryAddOutlined';
import photo from "../images/Screenshot (27).png"
import Comments from "../components/Comments";
import Card from "../components/Card" ;

const Container = styled.div`
    display :flex ;
    gap:24px ;
`
const Content = styled.div`
    flex:5 ;
`
const VideoWrapper = styled.div`

`
const Title = styled.h1`
    font-size: 18px;
    font-weight: 400;
    margin-top: 20px ;
    margin-bottom: 10px;
    color : ${({ theme }) => theme.text} ;
`
const Details = styled.div`
    display: flex ;
    align-items: center;
    justify-content: space-between;

    color : ${({ theme }) => theme.text} ;
`
const Info = styled.span`
    color : ${({ theme }) => theme.textSoft} ;
`
const Buttons = styled.div`
    display: flex ;
    gap: 20px ;
    color:  ${({ theme }) => theme.textSoft} ;
`
const Button = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;  
`
const Hr = styled.hr`
    margin: 15px 0px;
    border : 0.5px solid ${({ theme }) => theme.soft} ;
`

const Recommendation = styled.div`
    flex : 2 ;
    color : ${({ theme }) => theme.text} ;
`
const Channel = styled.div`
    display: flex;
    justify-content: space-between;
`
const ChannelInfo = styled.div`
    display: flex;
    gap: 20px;
`

const Image = styled.img`
    width: 50px;
    height :50px;
    border-radius: 50%;
`

const ChannelDetail = styled.div`
    display: flex;
    flex-direction: column;
    color :${({ theme }) => theme.text} ;
`

const ChannelName = styled.span`
    font-weight: 500 ;
`

const ChannelCounter = styled.span`
    margin-top: 5px ;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.text};
    font-size: 12px;
`

const Description = styled.p`
    font-size: 14px;
`

const Subscribe = styled.button`
    background-color : #797676;
    font-weight: 500;
    color: white ;
    border :none;
    border-radius: 3px;
    height : max-content ;
    padding :10px 20px ;
    cursor: pointer;
`


const Video = () => {
    return (
        <Container>

            <Content>
                <VideoWrapper>

                </VideoWrapper>
                <Title>Test video</Title>
                <Details>
                    <Info>121,213,213 views - Jun 21, 2023</Info>
                    <Buttons>
                        <Button>
                            <ThumbUpOutlinedIcon />Like
                        </Button>
                        <Button>
                            <ThumbDownOutlinedIcon />Dislike
                        </Button>
                        <Button>
                            <ShareOutlinedIcon />Share
                        </Button>
                        <Button>
                            <LibraryAddOutlinedIcon />Save
                        </Button>
                    </Buttons>
                </Details>
                <Hr />

                <Channel>
                    <ChannelInfo>
                        <Image src={photo}/>
                        <ChannelDetail>
                            <ChannelName>Formula1</ChannelName>
                            <ChannelCounter> 7 million subscribers</ChannelCounter>
                            <Description>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero natus doloremque quo iusto laborum, sed nisi explicabo soluta. Commodi autem eligendi nihil? Dolore similique blanditiis suscipit culpa quisquam totam inventore.</Description>
                        </ChannelDetail>
                    </ChannelInfo>
                    <Subscribe>SUBSCRIBE</Subscribe>
                </Channel>
                <Hr/>
                <Comments/>
            </Content>
            <Recommendation>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
                <Card type="sm"/>
            </Recommendation>
        </Container>
    )
}

export default Video;