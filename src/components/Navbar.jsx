import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`
    height: 60px;
    border-bottom: 1px solid lightgray;
    top: 0; 
    width: 100%;
    background-color: white;
    z-index: 99;
    position: fixed; 
    box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
    ${mobile({ height: "60px", })}
    `;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

/* LEFT navbar items */

const Lenguage = styled.span`
font-size: 14px;
cursor: pointer;
    ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;

`;

const Input = styled.input`
border: none;
    &:focus{
    outline: none !important;
    border: none;
}
    ${mobile({ width: "70px" })}
`;

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`;

/* CENTER navbar items */

const Center = styled.div`
flex: 1;
text-align: center;
`;

const Logo = styled.a`
    font-size: 32px;
    font-weight: bold;
    cursor: pointer;
`;

/* RIGHT navbar items */

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-left: 25px;
${mobile({ justifyContent: "center" })}
`;

const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
color: black;
margin-left: 25px;
    &:hover{
    transition-duration: 0.25s;
    transform: scale(1.05);
    color: teal;
}
`;

const Navbar = () => {
    return (
        <Container className='container'>
            <Wrapper>

                <Left>
                    <Lenguage>EN</Lenguage>
                    <SearchContainer>
                        <Input placeholder='search...' />
                        <SearchIcon style={{ color: "gray", fontSize: 16 }} />
                    </SearchContainer>
                </Left>

                <Center>
                    <Link to='/' style={{ "text-decoration": "none", "color": "black" }}><Logo>ZARA</Logo></Link>
                </Center>


                <Right>
                    <Link to='/register' style={{ color: 'inherit', textDecoration: 'inherit' }}><MenuItem>REGISTER</MenuItem></Link>
                    <Link to='/login' style={{ color: 'inherit', textDecoration: 'inherit' }}><MenuItem>LOGIN</MenuItem></Link>

                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlinedIcon color="action" />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>

        </Container >
    );
};

export default Navbar;
