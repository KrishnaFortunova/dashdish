import './ResetPass.css'

const EmailSend = () => {
    return (
        <div id="ResetPass" className="d-flex justify-content-center align-items-center">
            <div id="reset-box" className="d-flex flex-column align-items-center justify-content-center gap-2">
                <img id="check-logo" className="mb-3" src="./img/check.png" alt="completed" />
                <h1>Email telah terkirim</h1>
                <p>Silahkan cek kotak masuk email Anda</p>
            </div>
        </div>
    )
}

export default EmailSend