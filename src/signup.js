import React from "react";

class Signup extends React.Component {
  render() {
    return (
      <form>
        <h1>Sign up!</h1>
        <div>
          <input type="text" name="username" placeholder="Username" />
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input type="email" name="email" placeholder="Email" />
          <label htmlFor="email">Email</label>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
          <label htmlFor="password" name="password" placeholder="password">
            Password
          </label>
        </div>
      </form>
    );
  }
}

export default Signup;
