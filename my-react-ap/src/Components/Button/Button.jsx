import React from 'react'

export default function Button(props) {
  return (
    <button type='submit' className='btn'><a href="#feature">{props.name}</a></button>
  )
}
