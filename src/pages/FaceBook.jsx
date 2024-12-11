import { createRoot } from "react-dom/client";
import { useState } from "react";
import {
  TextField,
  FormControl,
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  Button,
  MenuItem,
  Select,
} from "@mui/material";
// import {segoe} from "../public/Font/Segoe UI Bold.ttf"

function FaceBook(){
 const [firstname, setFirstname] = useState("");
 const [lastname, setLastname] = useState("");
 const [contact, setContact] = useState("");

  function FirstnameChange(e){
    setFirstname(e.target.value);
  }

  function LastNameChange(e){
    setLastname(e.target.value);
  }

  return (
    <>
      {/* The header title Facebook */}
      <Box
        style={{
          position: "block",
          placeSelf: "center",
          color: "#0865FC",
          fontSize: "100px",
          margin: "30px",
        }}
      >
        <span className="head">facebook</span>
      </Box>

      {/*The sign up page*/}
      <center
        style={{
          fontFamily: "sans-serif",
          width: "570px",
          justifySelf: "center",
          borderRadius: "7px",
          justifyContent: "center",
          display: "flex",
          positon: "relative",
          boxShadow: "0 0px 10px 5px #DFE1E4",
        }}
      >
        <FormControl style={{ width: "100%" }}>
          <label
            htmlFor=""
            style={{
              fontSize: "40px",
              display: "block",
              margin: "20px",
              fontWeight: "700",
            }}
          >
            {/* The header part of the page */}
            Create a new account
          </label>
          <label style={{ marginBottom: "10px", fontWeight: "200" }}>
            It's quick and Easy.
          </label>
          <hr style={{ color: "red", width: "100%" }} />
          <Box
            // This is where we are going to be placing the user first and last names
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <TextField
              variant="outlined"
              label="First Name"
              type="text"
              style={{ width: "45%", marginLeft: "20px" }}
              value={firstname}
              onChange={FirstnameChange}
            />
            <TextField
              variant="outlined"
              label="Last Name"
              type="text"
              style={{ width: "45%", marginRight: "20px" }}
              value={lastname}
              onChange={LastNameChange}
            />
          </Box>

          <FormLabel
            id="birthday"
            style={{
              textAlign: "left",
              display: "block",
              paddingLeft: "35px",
              marginTop: "15px",
              marginBottom: "5px",
            }}
          >
            Birthday <img src="../src/assets/help_24dp_434343.svg" />
          </FormLabel>
          <Box
            style={{
              display: "flex",
              width: "93%",
              placeSelf: "center",
              justifyContent: "space-between",
            }}
          >
            <TextField
              select
              id="select-birth-month"
              label="Month"
              defaultValue="Jan"
              variant="outlined"
              style={{ width: "30%", position: "relative" }}
            >
              <MenuItem value="Jan">Jan</MenuItem>
              <MenuItem value="Feb">Feb</MenuItem>
              <MenuItem value="Mar">Mar</MenuItem>
              <MenuItem value="Apr">Apr</MenuItem>
              <MenuItem value="May">May</MenuItem>
              <MenuItem value="Jun">Jun</MenuItem>
              <MenuItem value="Jul">Jul</MenuItem>
              <MenuItem value="Aug">Aug</MenuItem>
              <MenuItem value="Sep">Sep</MenuItem>
              <MenuItem value="Oct">Oct</MenuItem>
              <MenuItem value="Nov">Nov</MenuItem>
              <MenuItem value="Dec">Dec</MenuItem>
            </TextField>

            <TextField
              select
              id="select-birth-month"
              label="Day"
              defaultValue="1"
              variant="outlined"
              style={{ width: "30%", position: "relative" }}
            >
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
              <MenuItem value="4">4</MenuItem>
              <MenuItem value="5">5</MenuItem>
              <MenuItem value="6">6</MenuItem>
              <MenuItem value="7">7</MenuItem>
              <MenuItem value="8">8</MenuItem>
              <MenuItem value="9">9</MenuItem>
              <MenuItem value="10">10</MenuItem>
              <MenuItem value="11">11</MenuItem>
              <MenuItem value="12">12</MenuItem>
              <MenuItem value="13">13</MenuItem>
              <MenuItem value="14">14</MenuItem>
              <MenuItem value="15">15</MenuItem>
              <MenuItem value="16">16</MenuItem>
              <MenuItem value="17">17</MenuItem>
              <MenuItem value="18">18</MenuItem>
              <MenuItem value="19">19</MenuItem>
              <MenuItem value="20">20</MenuItem>
              <MenuItem value="21">21</MenuItem>
              <MenuItem value="22">22</MenuItem>
              <MenuItem value="23">23</MenuItem>
              <MenuItem value="24">24</MenuItem>
              <MenuItem value="25">25</MenuItem>
              <MenuItem value="26">26</MenuItem>
              <MenuItem value="27">27</MenuItem>
              <MenuItem value="28">28</MenuItem>
              <MenuItem value="29">29</MenuItem>
              <MenuItem value="30">30</MenuItem>
              <MenuItem value="31">31</MenuItem>
            </TextField>

            <TextField
              select
              id="select-birth-month"
              label="Year"
              defaultValue="2000"
              variant="outlined"
              style={{ width: "30%", position: "relative", overflow: "auto" }}
            >
              <MenuItem value="2024">2024</MenuItem>
              <MenuItem value="2023">2023</MenuItem>
              <MenuItem value="2022">2022</MenuItem>
              <MenuItem value="2021">2021</MenuItem>
              <MenuItem value="2020">2020</MenuItem>
              <MenuItem value="2019">2019</MenuItem>
              <MenuItem value="2018">2018</MenuItem>
              <MenuItem value="2017">2017</MenuItem>
              <MenuItem value="2016">2016</MenuItem>
              <MenuItem value="2015">2015</MenuItem>
              <MenuItem value="2014">2014</MenuItem>
              <MenuItem value="2013">2013</MenuItem>
              <MenuItem value="2012">2012</MenuItem>
              <MenuItem value="2011">2011</MenuItem>
              <MenuItem value="2010">2010</MenuItem>
              <MenuItem value="2009">2009</MenuItem>
              <MenuItem value="2008">2008</MenuItem>
              <MenuItem value="2007">2007</MenuItem>
              <MenuItem value="2006">2006</MenuItem>
              <MenuItem value="2005">2005</MenuItem>
              <MenuItem value="2004">2004</MenuItem>
              <MenuItem value="2003">2003</MenuItem>
              <MenuItem value="2002">2002</MenuItem>
              <MenuItem value="2001">2001</MenuItem>
              <MenuItem value="2000">2000</MenuItem>
            </TextField>
          </Box>

          <Box
            // This is where the user gets to choose their gender
            style={{ display: "grid", paddingLeft: "35px", marginTop: "20px" }}
          >
            <FormLabel
              id="user-gender"
              style={{ display: "block", textAlign: "left" }}
            >
              Gender <img src="../src/assets/help_24dp_434343.svg" />
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="user-gender"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
                style={{
                  border: "1px solid #C4C4C4",
                  borderRadius: "5px",
                  width: "30%",
                  marginRight: "5%",
                }}
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Male"
                style={{
                  border: "1px solid #C4C4C4",
                  borderRadius: "5px",
                  width: "30%",
                  marginRight: "5%",
                }}
              />
              <FormControlLabel
                value="custom"
                control={<Radio />}
                label="Custom"
                style={{
                  border: "1px solid #C4C4C4",
                  borderRadius: "5px",
                  width: "30%",
                }}
              />
            </RadioGroup>
          </Box>

          <TextField
            // User have to enter his email or phone nymber to access
            label="Mobile number or Email"
            style={{ margin: "20px", marginBottom: "0", textAlign: "center" }}
          />
          <TextField
            // The user has to enter the security key that they want to use for the account
            label="New Password"
            style={{ margin: "20px", textAlign: "center" }}
            type="password"
          />

          <Box style={{ padding: "5px 0px 5px 15px", textAlign: "left" }}>
            <label
              style={{
                fontSize: "14px",
                fontWeight: "500",
                color: "#777777",
                fontFamily: "sans-serif",
              }}
              htmlFor=""
            >
              People who use our service may have uploaded your contact
              information to Facebook.{" "}
              <a style={{ color: "#1877F2", textAlign: "left" }}>Learn more.</a>
            </label>
            <br />
            <br />
            <label
              style={{
                fontSize: "14px",
                fontWeight: "500",
                color: "#777777",
                fontFamily: "sans-serif",
              }}
              htmlFor=""
            >
              By clicking Sign Up, you agree to our{" "}
              <a
                style={{
                  textDecoration: "none",
                  color: "#1877F2",
                  fontWeight: "500",
                }}
              >
                Terms, Privacy Policy{" "}
              </a>{" "}
              and
              <a style={{ textDecoration: "none", color: "#1877F2" }}>
                {" "}
                Cookies Policy.
              </a>
              <br />
              You may recive SMS Notifications from us and can opt out any time.
            </label>
          </Box>

          {/* Creating the button that needs to be shown on the page after the user is done providing his details */}
          <Button
            variant="contained"
            style={{
              backgroundColor: "#00A400",
              width: "40%",
              position: "relative",
              alignSelf: "center",
              marginTop: "20px",
            }}
          >
            Sign Up
          </Button>
          <a
            style={{
              textDecoration: "none",
              color: "#1877F2",
              fontWeight: "100",
              padding: "15px",
            }}
          >
            Already have an account?
          </a>
        </FormControl>
      </center>
    </>
  );
}
export default FaceBook;
