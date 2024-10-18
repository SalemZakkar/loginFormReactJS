import { Component } from 'react'
import './LoginScreenStyle.css';
import LoginForm from './LoginForm';
export class LoginScreen extends Component {
  render() {
    return (
      <div className='wrapper'>
        <LoginForm />
      </div>
    )
  }
}

export default LoginScreen