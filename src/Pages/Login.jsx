import React from 'react'
import styled from 'styled-components'


const Whole = styled.div`

`;


function Login() {
  return (
    <>
        <Whole>
            <h1>Login Page</h1>
            
            <form>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
            <button>Sign in</button>
            <button>Log in</button>

            <p>Don't have an account? <a href="#">Sign up</a></p>


        </Whole>
    </>
  )
}

export default Login
