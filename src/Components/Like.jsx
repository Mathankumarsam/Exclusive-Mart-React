// LikeButton.js
import React, { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

// Define keyframes for the animation
const likeAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
`;

// Create a styled button component
const Button = styled.button`
  background-color: #fff; 
  border: 0px solid #000; 
  border-radius: 50%; 
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;
  position: relative;

  .like-icon {
    width: 20px; 
    height: 20px; 
    transition: stroke 0.3s ease, transform 0.3s ease; 
    stroke: ${props => (props.liked ? 'red' : '#000')}; 
    fill: ${props => (props.liked ? '#fff' : 'transparent')}; 
    animation: ${props => (props.liked ? css`${likeAnimation} 0.5s` : 'none')}; 
  }
`;

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(prevLiked => !prevLiked);
  };

  return (
    <Button liked={liked} onClick={handleClick}>
      <svg
        className="like-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    </Button>
  );
};

export default LikeButton;
