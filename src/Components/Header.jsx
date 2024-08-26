import React, { useState } from "react";
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

const Container = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 12.5rem;
  gap: 28rem;
  background-color: black;
  color: white;

  @media screen and (min-width: 40px) and (max-width: 1350px) {
    justify-content: center;
    padding: 0px;
  }

  @media screen and (min-width: 40px) and (max-width: 1200px) {
    gap: 300px;
  }

  @media screen and (min-width: 40px) and (max-width: 1056px) {
    gap: 200px;
  }

  @media screen and (min-width: 40px) and (max-width: 954px) {
    gap: 150px;
  }

  @media screen and (min-width: 40px) and (max-width: 860px) {
    gap: 50px;
  }

  @media screen and (min-width: 40px) and (max-width: 760px) {
    display: none;
  }
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
  font-size: 16px;
  border-bottom: 1px solid #6e6a6a;

  @media screen and (min-width: 40px) and (max-width: 760px) {
    margin-top: 20px;
  }
`;

const Header = styled.h2`
  margin: 0;
  font-size: 28px;

  @media screen and (min-width: 40px) and (max-width: 980px) {
    font-size: 24px;
  }

  @media screen and (min-width: 40px) and (max-width: 980px) {
    font-size: 22px;
  }
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  ul {
    display: flex;
    gap: 35px;

    @media screen and (min-width: 40px) and (max-width: 980px) {
      gap: 20px;
    }

    @media screen and (min-width: 40px) and (max-width: 860px) {
      gap: 10px;
    }
  }

  @media (max-width: 760px) {
    position: fixed;
    top: 0;
    left: ${(props) => (props.isMenuOpen ? "0" : "-100%")};
    height: 300px;
    width: 350px;
    background-color: #f8f8f8;
    transition: left 0.3s ease;
    z-index: 1000;

    ul {
      display: flex;
      flex-direction: column;
      padding: 0;
      margin: 0;
      list-style: none;
      height: 100%;
      justify-content: center;
      align-items: center;
    }
  }
`;

const MenuToggle = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  margin: 10px;
  z-index: 1001;

  @media (max-width: 760px) {
    display: block;
  }
`;

const ListItem = styled.li`
  margin: 0 10px;
  list-style: none;
  &:hover {
    text-decoration: underline;
  }

  @media (min-width: 981px) {
    margin: 0 10px;
    text-align: left;
  }
`;

const ListItemLink = styled(RouterLink)`
  color: black;
  text-decoration: none;

  @media screen and (min-width: 40px) and (max-width: 980px) {
    font-size: 16px;
  }

  @media screen and (min-width: 40px) and (max-width: 860px) {
    font-size: 15px;
  }

  @media screen and (min-width: 40px) and (max-width: 760px) {
    font-size: 14px;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  @media screen and (min-width: 40px) and (max-width: 760px) {
    gap: 5px;
  }
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  background-color: #f5f5f5;
  padding: 10px 15px;
  border-radius: 5px;

  @media screen and (min-width: 40px) and (max-width: 980px) {
    padding: 10px;
  }

  @media screen and (min-width: 40px) and (max-width: 480px) {
    background: none;
  }
`;

const SearchInput = styled.input`
  outline: none;
  border: none;
  background-color: transparent;
  width: 200px;

  @media screen and (min-width: 40px) and (max-width: 980px) {
    width: 160px;
  }

  @media screen and (min-width: 40px) and (max-width: 760px) {
    width: 100px;
  }

  @media screen and (min-width: 40px) and (max-width: 480px) {
    display: none;
  }
`;

const SearchIcon = styled.img`
  margin-left: 10px;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media screen and (min-width: 40px) and (max-width: 860px) {
    gap: 5px;
  }
`;

const Image = styled.img`
  margin-right: 10px;

  @media screen and (min-width: 40px) and (max-width: 860px) {
    width: 24px;
    margin-right: 5px;
  }
`;

const NavBar = ({ searchQuery, onSearch }) => {
  if (typeof onSearch !== "function") {
    console.error("onSearch is not a function");
  }
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
              fill="white"
              strokeWidth="2"
            />
          </svg>
        </Anchorli>
      </Container>

      <Bottom>
        <MenuToggle onClick={toggleMenu}>{isMenuOpen ? "X" : "☰"}</MenuToggle>
        <Header>Exclusive</Header>
        <NavList isMenuOpen={isMenuOpen}>
          <ul>
            <ListItem>
              <ListItemLink href="/">Home</ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink href="/contact">Contact</ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink href="/about">About</ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink href="/signup">Sign Up</ListItemLink>
            </ListItem>
          </ul>
        </NavList>

        <Right>
          <Search>
            <SearchInput
              type="text"
              placeholder="What are you looking for?"
              value={searchQuery}
              onChange={(e) => onSearch(e.target.value)}
            />
            <SearchIcon
              src={require("../assets/images/Vector (2).svg").default}
              alt="Search Icon"
            />
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
