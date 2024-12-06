import {Button, TextField, FormControl, Select, MenuItem} from '@mui/material'

  

function FaceBook(){
    return(
        <center>
      <FormControl>
        <h1>Create A New Account</h1>
        <p style={{textAlign: 'center', marginTop: '-20px'}}>It's quick and easy</p>

        <TextField variant='outlined' label='First name'/>

        <TextField variant='outlined' label='Last name'/>

        

        <TextField variant='outlined' label='Mobile number or Email'/>

        <TextField variant='outlined' label='password' type='password'/>

        <p>People who use our service may have uploaded your contact <br/> information to Facebook  <a>Learn more</a></p>

        <Button variant='contained'>Sign Up</Button>

        
      </FormControl>
      </center>
    )
}
export default FaceBook;