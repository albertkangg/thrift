import React from 'react'
import styled from 'styled-components';

const Item = styled.div`
  flex: 0 0 auto;
  flex-direction: column;
  width: 300px; /* Width of each item */
  height: 400px;
  background-color: #f0f0f0;
  margin-right: 50px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  &:last-child {
    margin-right: 0; /* Removes margin from the last item */
  };
  &:first-child {
    margin-left: 50px;
  }
`;

const ScrollViewCard = ({ index }) => {
  return (
    <Item>
        <div style={{height: "75px"}}>
          <h3 style={{textAlign: "center", textSize: "32px"}}>{`PRODUCT ${index}`}</h3>
        </div>
        <img src="https://i.mdel.net/i/db/2019/2/1075877/1075877-800w.jpg" alt="model" style={{ bottom: "0", width: "300px", height: "325px"}}/>
    </Item>
  )
}

export default ScrollViewCard