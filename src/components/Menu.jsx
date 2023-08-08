import React from "react";
import styled from 'styled-components' 
import Mtube from "../images/th (1).jpg"
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import HistoryIcon from '@mui/icons-material/History';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import MovieCreationIcon from '@mui/icons-material/MovieCreation';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import LightModeIcon from '@mui/icons-material/LightMode';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";

const Container = styled.div`
    flex :1 ;
    background-color : ${({theme}) => theme.bgLighter} ;
    height : 100vh ;
    color :${({theme}) => theme.text} ;
    font-size: 13px ;
    position : sticky;
    top: 0 ;
` 
const Wrapper = styled.div`
    padding : 10px 2px ; 
` 
const Logo = styled.div`
    display : flex ;
    align-items : center ;
    gap : 0px ;
    font-weight : bold ; 
    margin-bottom : 10px ;
    cursor: pointer;
` 
const Img = styled.img`
    height : 50px ;
`
const Item = styled.div`
    display : flex ;
    align-items : center  ;
    gap : 10px ; 
    cursor: pointer;
    padding: 2px 0px ;
    &:hover {
        background-color: ${({theme}) => theme.soft} ;
    }
`
const Hr = styled.div`
    margin: 13px 0px ;
    border: 0.5px solid ${({theme}) => theme.soft} ;
`
const Login = styled.div``

const Button = styled.button`
    padding : 5px 15px ;
    background-color: transparent;
    border : 1px solid #3ea6ff;
    color: #3ea6ff ;
    border-radius : 3px  ;
    font-weight: 500 ;
    margin-top: 10px ;
    cursor: pointer; 
    display: flex;
    align-items: center;
    gap : 5px ;
`
const Title =styled.h2`
    font-size: 14px;
    font-weight: 500;
    color: #aaaaaa;
    margin-bottom: 20px;
`
const Menu = ( {darkMode ,setDarkMode}) => {
    return (
        <Container>
            <Wrapper>
                <Link to="/" style= {{textDecoration:"none",color:"inherit"}}>
                <Logo>
                    <Img src={Mtube}/>
                    Mtube
                </Logo>
                </Link>
                <Item>
                    <HomeIcon />
                    Home
                </Item>
                <Item>
                    <ExploreIcon />
                    Explore
                </Item>
                <Item>
                    <SubscriptionsIcon />
                    Subscriptions
                </Item>
                <Hr/>
                <Item>
                    <LibraryAddIcon />
                    Library
                </Item>
                <Item>
                    <HistoryIcon />
                    History
                </Item>
                <Hr/>
                <Login>
                    Sign in to like videos , comment and subscribe.
                    <Link to="signin" style={{textDecoration:"none"}}>
                    <Button><AccountCircleIcon/>SIGN IN</Button>
                    </Link>
                </Login>
                <Hr/>
                <Item>
                    <LibraryMusicIcon />
                    Music
                </Item>
                <Item>
                    <SportsBasketballIcon />
                    Sports
                </Item>
                <Item>
                    <SportsEsportsIcon />
                    Gaming
                </Item>
                <Item>
                    <MovieCreationIcon />
                    Movies
                </Item>
                <Item>
                    <NewspaperIcon />
                    News
                </Item>
                <Item>
                    <LiveTvIcon />
                    Live
                </Item>
                <Hr/>
                <Item>
                    <SettingsIcon />
                    Settings
                </Item>
                <Item>
                    <ReportGmailerrorredIcon />
                    Report
                </Item>
                <Item>
                    <QuestionMarkIcon />
                    Help
                </Item>
                <Item onClick={ () => setDarkMode(!darkMode)}>
                    <LightModeIcon />
                    {darkMode ? "Light" : "Dark"} Mode
                </Item>
            </Wrapper>
        </Container>
    )
}
export default Menu ;