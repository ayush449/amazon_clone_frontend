import React,  { useContext, useState } from "react";
import { NavLink } from 'react-router-dom';
import "./signup.css";


function Sign_in() {

  
  const [logdata, setData] = useState({
      email: "",
      password: ""
  });
  
  const adddata = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);

    setData((pre) => {
        return {
            ...pre,
            [name]: value
        }
    })
};


  return (
    <>
      <section>
        <div className="sign_container">
          <div className="sign_header">
            <img src="./blacklogoamazon.png" alt="signupimg" />
          </div>
          <div className="sign_form">
            <form method="POST">
              <h1>Sign-In</h1>

              <div className="form_data">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" 
                 onChange={adddata}
                 value={logdata.email}
                />
              </div>
              <div className="form_data">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="At least 6 characters"
                  onChange={adddata}
                  value={logdata.password}
                />
              </div>
              <button type="submit" className="signin_btn">
                Continue
              </button>
            </form>
          </div>
          <div className="create_accountinfo">
                    <p>New to Amazon?</p>
                    <button>  <NavLink to="/Signup">Create your Amazon Account</NavLink></button>
                </div>
        </div>
      </section> 
    </>
  );
}

export default Sign_in;
