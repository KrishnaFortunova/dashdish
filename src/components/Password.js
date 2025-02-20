const Password = ({ onChange }) => {
    const showHide = () => {
        const password = document.getElementById('password')
        const icon = document.getElementById('pass-toggle')

        if (password.type === 'password') {
            icon.className = 'bi bi-eye-slash'
            password.type = 'text'
        } else {
            icon.className = 'bi bi-eye'
            password.type = 'password'
        }
    }

    return (
        <div class="input-group mb-3">
            <input type="password" name="password" class="form-control" placeholder="Password" id="password" onChange={onChange} />
            <span class="input-group-text" id="basic-addon2" onClick={showHide} style={{ cursor: 'pointer' }}>
                <i id="pass-toggle" className="bi bi-eye"></i>
            </span>
        </div>
    )
}

export default Password