import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import LoginPortal from './pages/LoginPortal'
import FaceBook from './pages/FaceBook'
// import { green } from '@mui/material/colors'
// import Event from ''

// function ChangeBackgroundColor(){
//   const colors = ['red', 'blue', 'green', 'yellow', 'black', 'violet']
//   function btnChange(){
//     // generate random number
//     let generateRandomNumber = Math.floor(Math.random() * colors.length)
//     // generate color
//     let generatedColor = colors[generateRandomNumber];
//     // set background color
//     document.body.style.backgroundColor = generatedColor;
//   }



//   return(
//     <button onClick={btnChange}>Change background</button>
//   )
// }

function LoginPage(){
 const[username, setUsername] = useState('')
  function btnClick(){
    console.log(username)

  }

  function usernameChange(e){
    setUsername(e.target.value)
  }

  return(
    <>
    <input value={username} onChange={usernameChange} type='text' placeholder='Enter your username'/>
    <br/><br/>
    <button onClick={btnClick}>Click Me</button>
    </>
  )
}


createRoot(document.getElementById('root')).render(
  // <TextField variant='outlined' label='Username' ></TextField>
  // <ChangeBackgroundColor />
  <FaceBook />

)
