import React, { useRef } from 'react';
import styled from 'styled-components';
import ScrollViewCard from './ScrollViewCard';

// Add CSS here as shown above
const Container = styled.div`
  position: relative;
  width: 1100px; /* Width enough to show 3 items */
  overflow: hidden; /* Hides anything outside this width */
  margin: 0 auto; /* Center the container */
  background: gray;
`;

const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  scrollbar-width: 1050px;
  padding: 20px 0; 
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  width: calc(200px * 10); /* Total width of all items */
`;

// const Item = styled.div`
//   flex: 0 0 auto;
//   width: 300px; /* Width of each item */
//   height: 400px;
//   background-color: #f0f0f0;
//   margin-right: 50px;
//   border-radius: 8px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 20px;
//   &:last-child {
//     margin-right: 0; /* Removes margin from the last item */
//   };
//   &:first-child {
//     margin-left: 50px;
//   }
// `;

const ArrowButton = styled.button`
 position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: black;  /* Green background */
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: white;
  z-index: 10;
  width: 40px;         /* Width and height to create a circle */
  height: 40px;
  border-radius: 50%;  /* Makes the button circular */
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);  /* Adds a subtle shadow for depth */
  &:hover {
    background-color: #367c39;  /* Darker green on hover */
  }
`;


const HorizontalScrollView = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    // Calculate the scroll amount based on item width plus margin
    // const scrollWidth = 300 + 50; // 200px width + 16px margin
    // if (direction === 'left') {
    //   scrollRef.current.scrollLeft -= scrollWidth; 
    // } else {
    //   scrollRef.current.scrollLeft += scrollWidth; 
    // }
    // console.log(scrollRef.current)

        // Calculate the scroll amount based on item width plus margin
    const scrollWidth = 300 + 50; // 200px width + 16px margin
    if (direction === 'left') {
      scrollRef.current.scrollBy({ left: -scrollWidth, behavior: 'smooth' }); 
    } else {
      scrollRef.current.scrollBy({ left: scrollWidth, behavior: 'smooth' });
    }
  };


  const smoothScroll = (direction) => {
    const scrollWidth = 200 + 16; // Item width + margin
    let start = null;
    const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const distance = (progress / 200) * scrollWidth; // Adjust time to 200ms for full scroll
        if (direction === 'left') {
            scrollRef.current.scrollLeft -= distance;
        } else {
            scrollRef.current.scrollLeft += distance;
        }
        if (progress < 200) { // Continue moving while progress time is less than 200ms
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
  };

  return (
    <Container>
      <ArrowButton onClick={() => scroll('left')} style={{ left: 10 }}>&#10094;</ArrowButton>
      <ScrollContainer ref={scrollRef} style={{width: '1100px'}}>
        {Array.from({ length: 10 }).map((_, index) => (
          <ScrollViewCard index={index+1} key={index}>Item {index + 1}</ScrollViewCard>
        ))}
      </ScrollContainer>
      <ArrowButton onClick={() => scroll('right')} style={{ right: 10 }}>&#10095;</ArrowButton>
    </Container>
  );
};

export default HorizontalScrollView;
