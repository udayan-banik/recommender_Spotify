import React from 'react'
import "./Login.css";

import { Container } from 'react-bootstrap'

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=573feab8b68945f3b52ddf7614a9e7a2&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Login() {
    return <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh'}}>
        <div className="login"><img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt={""}
      /></div>
        <a className="btn btn-success btn-lg m-2" href={AUTH_URL}>Login with spotify</a>
    </Container>
}