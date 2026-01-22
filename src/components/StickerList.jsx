import React from "react";
import Sticker from "./Sticker";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
`;

export default function StickerList({ stickers, handleClick }) {
  return (
    <List>
      {stickers.map((sticker) => {
        return (
          <Sticker
            key={sticker.label}
            data={sticker}
            handleClick={handleClick}
          />
        );
      })}
    </List>
  );
}
