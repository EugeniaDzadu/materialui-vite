import { Button, TextField, FormControl } from "@mui/material";
import { useState } from "react";

function LoginPortal() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function usernameChange(e) {
    setUsername(e.target.value);
  }

  function passwordChange(e) {
    setPassword(e.target.value);
  }

  function btnClick() {
    console.log(username, password);
  }

  return (
    <center>
      <FormControl
        style={{
          border: "1px solid black",
          margin: "5px",
          padding: "20px",
          borderRadius: "15px",
        }}
      >
        <label htmlFor="" style={{ margin: "20px", textAlign: "center" }}>
          Portal
        </label>

        <TextField
          variant="outlined"
          label="username"
          value={username}
          onChange={usernameChange}
          type="text"
        />

        <TextField
          variant="outlined"
          label="password"
          type="password"
          value={password}
          onChange={passwordChange}
          style={{ marginTop: "20px" }}
        />

        {/* <TextField variant='contained' value='LogIn' type='button'/> */}
        <Button
          variant="contained"
          style={{ marginTop: "20px" }}
          onClick={btnClick}
        >
          Log In
        </Button>
      </FormControl>
    </center>
  );
}
export default LoginPortal;
