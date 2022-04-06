import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import DirectionsIcon from '@mui/icons-material/Directions';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


const Container = styled.div`
display: flex;
`;

const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`;

const Logo = styled.h1`

`;

const Description = styled.p`
margin-top: 20px;
margin-bottom: 20px;
`;

const SocialContainer = styled.div`
display: flex;
`;

const SocialIcon = styled.div`
width: 35px;
height: 35px;
border-radius: 50%;
color: white;
background-color: ${props => props.bg};
display: flex; 
align-items: center;
justify-content: center;
margin-right: 20px;
`;

const Center = styled.div`
flex: 1;
padding: 20px;
`;

const Title = styled.h3`
margin-bottom: 30px;
`;

const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`;

const ListItem = styled.li`
width: 50%;
margin-bottom: 5px;
`;

const Right = styled.div`
flex: 1;
padding: 20px;
`;

const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`;

const Payment = styled.img`
width: 50%;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>ZARA</Logo>
                <Description>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Assumenda sequi voluptatibus autem ullam molestias eum,
                    facere suscipit, ipsum quae provident voluptas minima reiciendis
                    culpa harum nemo! Quis corrupti quam debitis labore.
                </Description>
                <SocialContainer>
                    <SocialIcon bg="#4267B2">
                        <FacebookIcon />
                    </SocialIcon>
                    <SocialIcon bg="#1DA1F2">
                        <TwitterIcon />
                    </SocialIcon>
                    <SocialIcon bg="#E1306C">
                        <InstagramIcon />
                    </SocialIcon>
                    <SocialIcon bg="#E60023">
                        <PinterestIcon />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <DirectionsIcon style={{ marginRight: "10px" }} /> 622 Dixie Path , South Tobinchester 98336</ContactItem>
                <ContactItem>
                    <PhoneIcon style={{ marginRight: "10px" }} /> +1 234 56 78</ContactItem>
                <ContactItem>
                    <MailOutlineIcon style={{ marginRight: "10px" }} /> contact@zara.com</ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    );
};

export default Footer;
