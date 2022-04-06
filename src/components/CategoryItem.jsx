import styled from 'styled-components';

const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
filter: brightness(40%);
transition: all 0.5s ease;
`;

const Container = styled.div`
flex: 1;
margin: 10px;
height: 65vh;
position: relative;
overflow: hidden;
&:hover ${Image}{
    transform: scale(1.1);
}
`;

const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const Title = styled.h1`
color: white;
margin-bottom: 20px;
`;

const Button = styled.button`
border: none;
padding: 15px;
background-color: white;
color: black;
cursor: pointer;
font-weight: 600;
box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
    &:hover{
        transition-duration: 0.25s;
        transform: scale(1.05);
        background-color: teal;
        color: white;
        font-weight: 700;
    }
`;

const CategoryItem = ({ item }) => {
    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Title> {item.title} </Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    );
};

export default CategoryItem;
