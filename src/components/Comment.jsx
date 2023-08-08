import React from "react";
import styled from 'styled-components';
import image from "../images/th (1).jpg"

const Container = styled.div`
    display: flex ;
    gap: 10px;
    margin: 30px 0px ;

`
const Avatar = styled.img`
    width: 50px;
    height :50px;
    border-radius: 50%;
`
const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px ;
    color: ${({ theme }) => theme.text};
`
const Name =styled.span`
    font-size: 13px;
    font-weight: 500;
`
const Date =styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.textSoft};
    margin-left: 5px;
`
const Text =styled.span`
    font-size: 14px ;
`

const Comment = () => {
    return (
        <Container>
            <Avatar src={image}/>
            <Details>
                <Name>Soul Viper<Date>1 day ago</Date></Name>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dignissimos repudiandae accusamus perspiciatis voluptatem. Dolorem, ullam veritatis. Eligendi mollitia veritatis cupiditate dolorum fuga reiciendis esse porro unde nobis. Deleniti, perferendis!</Text>
            </Details>
        </Container>
    )
}

export default Comment ;