import React from 'react'
import './TaskDetails.css'
import { Button } from './Button'
import { useParams, useNavigate } from 'react-router-dom'

export function TaskDetails(){
  const {taskTitle} = useParams();
  const history = useNavigate()

  const handleBackButtonClick = () =>{
    history(`/`)
  }
  return(
    <>
      <div className='back-button-container'>
        <Button onClick={handleBackButtonClick}>Voltar</Button>
      </div>
      <div className='task-details-container'>
          <h2>{taskTitle}</h2>
          <p>Alguma coisa</p>
      </div>
    </>
  )
}