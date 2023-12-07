import {
    signInWithEmailAndPassword,
    GoogleAuthProvider,
} from "firebase/auth"
import { auth } from "firebaseui"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { observer } from "mobx-react"

import { fireauth } from "../config/firebase"
import SharedState from "../Store"

import Password from "../components/Password"
import './Login.css'

const Login = observer(() => {
    const navigate = useNavigate()

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    useEffect(() => {
        var ui = auth.AuthUI.getInstance() || new auth.AuthUI(fireauth)

        ui.start('#firebaseui-auth-container', {
            callbacks: {
                signInSuccessWithAuthResult: function (authResult, redirectUrl) {
                    navigate('/')
                    return true;
                },
            },
            signInFlow: 'popup',
            signInOptions: [
                GoogleAuthProvider.PROVIDER_ID
            ]
        });
    }, [])

    const onLogin = async (e) => {
        e.preventDefault()

        SharedState.setEmail(email)
        signInWithEmailAndPassword(fireauth, email, password)
            .then((userCredential) => {
                navigate('/')
            })
            .catch((error) => {
                var errorBox = document.getElementById('error-box')

                if (errorBox === null) {
                    errorBox = document.createElement('div')
                    errorBox.id = 'error-box'
                    errorBox.className = 'notif'

                    const parent = document.getElementById('auth-box')
                    parent.insertBefore(errorBox, parent.children[1])
                }

                switch (error.code) {
                    case 'auth/invalid-login-credentials':
                        errorBox.innerText = 'Password atau email salah'
                        break;

                    case 'auth/too-many-requests':
                        errorBox.innerText = 'Terlalu banyak percobaan gagal. Coba lagi nanti'
                        break;

                    default:
                        errorBox.innerText = 'Terjadi kesalahan. Coba lagi nanti'
                        break;
                }
            });
    }

    return (
        <div id="Login" className="d-flex">
            <div className="left-box d-flex justify-content-center p-5">
                <div id="auth-box" className="d-flex justify-content-center flex-column gap-4">
                    <h1>Login ke akun Anda</h1>
                    <form id="auth-form" className="d-flex flex-column gap-3" method="POST">
                        <input name="email" type="email" className="form-control" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                        <Password onChange={e => setPassword(e.target.value)} />
                        <button type="submit" className="btn btn-dark" onClick={onLogin}>Login</button>
                    </form>

                    <div>
                        <span className="anchor-span" onClick={() => navigate('/reset-pass')} style={{ cursor: 'pointer' }}>Lupa Password?</span>
                    </div>

                    <div id="firebaseui-auth-container"></div>

                    <div className="options">
                        <span>Belum mempunyai akun? <a href="/signup">Daftar</a></span>
                    </div>
                </div>
            </div>
            <div className="right-box d-flex justify-content-center align-items-center">
                <img src="./img/food pic.png" alt="foods" />
            </div>
        </div>
    )
})

export default Login;