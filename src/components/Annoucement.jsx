import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import CancelIcon from '@mui/icons-material/Cancel';

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
    position: fixed;
    top: 60px;
    width: 100vw;
    z-index: 98;
`;

const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 15px;
        &:hover{
        cursor: pointer;
        transform: scale(0.85);
        transition-duration: 0.75s;
        }
`;




const Annoucement = () => {
    const [show, setShow] = useState(true);

    return (
        <>
            {
                show ? <Container>
                    Super deal! Free shiping on orders over $50
                    <ImageContainer>
                        <CancelIcon onClick={() => setShow(false)} />
                    </ImageContainer>
                </Container >
                    : null
            }
        </>
    );
};

export default Annoucement;
