import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { fireauth } from "../config/firebase"

import Password from "../components/Password";


const Signup = () => {
    const navigate = useNavigate()

    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const onSignup = async (e) => {
        e.preventDefault()

        await createUserWithEmailAndPassword(fireauth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                updateProfile(user, { displayName: username })
                    .then(() => navigate("/login"))
            })
            .catch((error) => {
                var errorBox = document.getElementById('error-box')

                if (errorBox === null) {
                    errorBox = document.createElement('p')
                    errorBox.className = 'notif'
                    errorBox.id = 'error-box'

                    const parent = document.getElementById('auth-form')
                    parent.insertBefore(errorBox, parent.children[1])
                }

                switch (error.code) {
                    case 'auth/email-already-in-use':
                        errorBox.innerText = 'Email sudah terdaftar. Silahkan log in'
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
        <div id="Signup" className="d-flex">
            <div className="left-box d-flex justify-content-center p-5">
                <div id="auth-box" className="d-flex justify-content-center flex-column gap-4">
                    <h1>Buat akun Food Delivery</h1>
                    <form id="auth-form" className="d-flex flex-column gap-3" method="POST">
                        <p className="notif">Masukkan data di bawah</p>
                        <input name="username" type="text" className="form-control" placeholder="Username" onChange={e => setUsername(e.target.value)} />
                        <input name="email" type="email" className="form-control" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                        <Password onChange={e => setPassword(e.target.value)} />
                        <button type="submit" className="btn btn-dark" onClick={onSignup}>Daftar</button>
                    </form>

                    <div id="firebaseui-auth-container"></div>

                    <div className="options">
                        <span>Masuk ke akun yang sudah ada? <a href="/login">Login</a></span>
                    </div>
                </div>
            </div>
            <div className="right-box d-flex justify-content-center align-items-center">
                <img src="./img/food pic.png" alt="foods" />
            </div>
        </div>
    )
}

export default Signup;