import React, { useState } from 'react';
import styled from 'styled-components';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { sliderItems } from '../data';
import { Link } from 'react-router-dom';

const Container = styled.div`
margin-top: 60px;
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
    z-index: 2;
        &:hover{
        transition-duration: 0.5s;
        transform: scale(1.5);
    }
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #${props => props.bg};
`;

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`;

const Image = styled.img`
    margin-top: 2em;
    margin-left: 10em;
    height: 85%;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
    margin-right: 10em;
    margin-bottom: 16em;
`;

const Title = styled.h1`
    font-size: 70px;
    color: black;
`;

const Description = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;
const Button = styled.button`

    border: none;
    padding: 0.6em;
    font-size: 1.5rem;
    background-color: white;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
    font-weight: 500;
    &:hover{
        transition-duration: 0.25s;
        transform: scale(1.05);
        background-color: black;
        color: white;
        font-weight: 600;
    }
`;
const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <KeyboardArrowLeftOutlinedIcon />
            </Arrow>

            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Description>{item.desc}</Description>
                            <Link to='/productlist' style={{ color: 'inherit', textDecoration: 'inherit' }}><Button>SHOP NOW</Button></Link>
                        </InfoContainer>
                    </Slide>
                ))}

            </Wrapper>

            <Arrow direction="right" onClick={() => handleClick("right")}>
                <KeyboardArrowRightOutlinedIcon />
            </Arrow>
        </Container>
    );
};

export default Slider;
