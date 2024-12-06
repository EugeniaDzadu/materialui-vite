import {Button, TextField, FormControl} from '@mui/material'

function LoginPortal(){
  return(

    <center>
   <FormControl style={{border: '1px solid black', margin: '5px', padding: '20px', borderRadius: '15px'}}>

    <label htmlFor='' style={{margin: '20px', textAlign: 'center'}}>Portal</label>

     <TextField variant='outlined' label='username'/>

     <TextField variant='outlined' label='password' type='password' style={{marginTop: '20px'}}/>

     {/* <TextField variant='contained' value='LogIn' type='button'/> */}
     <Button variant='contained' style={{marginTop: '20px'}}>Log In</Button>

   </FormControl>

   </center>
   
  )
}
export default LoginPortal;