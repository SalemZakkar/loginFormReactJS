/* eslint-disable react/no-unescaped-entities */
import Gap from "./Gap";
import "./LoginFormStyle.css";

function LoginForm() {
  let name = "";
  return (
    <div className="loginBox">
      <h1>Login</h1>
      <form>
        <div className="inputBox">
          <input
            placeholder="Email"
            className="input"
            onChange={(val) => {
              name = val.target.value;
            }}
          />
        </div>
        <Gap height="8px" />
        <div className="inputBox">
          <input placeholder="Password" className="input" type="password" />
        </div>
        <Gap height="16px" />
        <div
          className="inputBox"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <lable>
            <input type="checkBox" />
            Remember me
          </lable>
          <a href="#">Forget your password ?</a>
        </div>
        <Gap height="32px" />
        <button
          onClick={() => {
            alert("Hello  " + name);
          }}
        >
          Login
        </button>
        <Gap height="16px" />
        <div>
          Don't have account ? <a href="#">Sign Up</a>
        </div>
        <Gap height="16px" />
      </form>
    </div>
  );
}

export default LoginForm;
