import React from 'react'

const Card = (props) => {
  const classes = props.className + " ";
  return (
    <span className="shadow-md shadow-gray-600  p-3 border inline-flex flex-col m-4  ">
    {/* <div className={classes}> */}
      {props.children}
    </span>
  )
}

export default Card