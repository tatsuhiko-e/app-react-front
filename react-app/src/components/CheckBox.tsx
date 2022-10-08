import React, { useState, useEffect, FC } from "react"

type checBoxType = {
  lists:any
}

const CheckBox = (props: checBoxType) => {
  return (
    <>
      {props.lists.map((list:any) =>
        <input type={"checkbox"} checked={list.checked} />
      )}
    </>
  )
}

export default CheckBox