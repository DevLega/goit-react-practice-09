import React from 'react'

export default function Choice({ sticker }) {
  return (
    <div>
      <h1>Choice</h1>
      <img src={sticker.img}></img>
      <h4>{sticker.label}</h4>
    </div>
  )
}
