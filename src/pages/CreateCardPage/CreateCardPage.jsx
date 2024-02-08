import React from 'react'

const CreateCardPage = () => {
  return (
    <div>
      <h1> Create Card</h1>
      <form action="/cards" method="post">
        <label htmlFor="question">Question: </label>
        <input type="text" name="question" id="question"/><br/>
        <label htmlFor="answer">Answer: </label>
        <textarea name="answer" rows="5" cols="30" id="answer"></textarea><br/>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  )
}

export default CreateCardPage
