import React from 'react'
import { useParams } from 'react-router-dom'

const EditCardPage = () => {
  let {id}=useParams();
  return (
    <div>
      <h1> Edit Card</h1>
      <p>This page is for editing a specific card.</p>
    </div>
  )
}

export default EditCardPage;
