import React from "react";
import styled from "styled-components";

const LiElement = styled.li`
  cursor: pointer;
  border: 1px solid black;
  padding: 10px;
  border-radius: 8px;
`;

export default function Sticker({ data, handleClick }) {
  return (
    <LiElement onClick={() => handleClick(data)}>
      <img src={data.img}></img>
      <h4>{data.label}</h4>
    </LiElement>
  );
}
