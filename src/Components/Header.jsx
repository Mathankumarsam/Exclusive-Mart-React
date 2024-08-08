import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Styled components :-
const Container = styled.div`
  height: 3vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px 0px ;
  padding-right: 12.5rem;
  gap: 28rem;
  background-color: black;
  color: white;
`;

const TopText = styled.p`
  color: white;
  font-size: 14px;
  display: flex;
  gap: 5px;
`;

const Anchorli = styled.a`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 400;
`;

const ShopLink = styled.a`
  color: white;
  margin-left: 5px;
  font-weight: 900;
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 30px;
  padding: 0 0 10px 0;
  border-bottom: 1px solid #6e6a6a;
`;

const Header = styled.h2`
  margin: 0;
  font-size: 28px;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 35px;
`;

const ListItem = styled.li`
  margin: 0 10px;

    &:hover {
    text-decoration: underline;
    }

`;

const ListItemLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  background-color: #f5f5f5;
  padding: 10px 15px;
  border-radius: 5px;
`;

const SearchInput = styled.input`
  outline: none;
  border: none;
  background-color: transparent;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Image = styled.img`
  margin-right: 10px;
`;



const NavBar = () => {
  return (
    <>
      <Container>
        <TopText>
          <span>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </span>
          <ShopLink href="/">Shop Now</ShopLink>
        </TopText>
        <Anchorli href="/">
          English
          <svg
            width="13"
            height="8"
            viewBox="0 0 13 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.36403 4.95L11.314 0L12.728 1.414L6.36403 7.778L2.67029e-05 1.414L1.41403 0L6.36403 4.95Z"
              fill="white" strokeWidth="2"
            />
          </svg>
        </Anchorli>
      </Container>

      <Bottom>
        <Header>Exclusive</Header>
        <NavList>
          <ListItem>
            <ListItemLink to="/">Home</ListItemLink>
          </ListItem>
          <ListItem>
            <ListItemLink to="/contact">Contact</ListItemLink>
          </ListItem>
          <ListItem>
            <ListItemLink to="/about">About</ListItemLink>
          </ListItem>
          <ListItem>
            <ListItemLink to="/signup">Sign Up</ListItemLink>
          </ListItem>
        </NavList>

        <Right>
          <Search>
            <SearchInput
              type="text"
              placeholder="What are you looking for?"
            />
            <img src={require("../assets/images/Vector (2).svg").default} alt="Search Icon" />
          </Search>
          <ImageContainer>
            <Image
              src={require("../assets/images/Vector (3).svg").default}
              alt="Image 1"
            />
            <Image
              src={require("../assets/images/Cart1.svg").default}
              alt="Image 2"
            />
          </ImageContainer>
        </Right>
      </Bottom>
    </>
  );
};

export default NavBar;
