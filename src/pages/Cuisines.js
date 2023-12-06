import { fireauth } from '../config/firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import './Cuisines.css'


const Cuisines = () => {
    const navigate = useNavigate()

    const onLogOut = () => {
        signOut(fireauth)
            .then(() => navigate('/'))
            .catch((error) => console.log(error.code))
    }

    return (
        <div id="Cuisines">
            <header>
                {/* <img id="bg-top" src="./img/ellipse.png" alt="" /> */}
                <div className="navbar d-flex justify-content-between align-items-start px-5 pt-5">
                    <a href="/">
                        <img className="logo" src="./img/logo.png" alt="Logo" />
                    </a>
                    <nav>
                        <ul className="d-flex gap-3">
                            <li><a href="/">
                                <div className="nav-button" style={{ backgroundColor: 'black' }}>Home</div>
                            </a></li>
                            <li><a href="/">
                                <div className="nav-button" style={{ backgroundColor: '#5C3018' }} onClick={onLogOut}>Log Out</div>
                            </a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            <main className="d-flex flex-column align-items-center py-4" style={{ gap: '5.5rem' }}>
                <div className="title d-flex justify-content-center align-items-center">
                    <h1 className="mb-0">CUISINES</h1>
                </div>
                <div className="box d-flex align-items-center p-5 gap-5" style={{ backgroundColor: '#5C3018', color: '#F6DC98' }}>
                    <img src="./img/indian.png" alt="Indian Cuisines" />
                    <div className="desc d-flex flex-column align-items-center gap-3">
                        <h1>INDIAN CUISINES</h1>
                        <p>Indian cuisine consists of a variety of regional and traditional cuisines native to India.</p>
                    </div>
                </div>
                <div className="box d-flex align-items-center p-5 gap-5" style={{ backgroundColor: 'black', color: 'white' }}>
                    <img src="./img/chinese.png" alt="Chinese Cuisines" />
                    <div className="desc d-flex flex-column align-items-center gap-3">
                        <h1>CHINESE CUISINES</h1>
                        <p>Chinese cuisine is one of the oldest and most diverse cuisines in the world.</p>
                    </div>
                </div>
                <div className="box d-flex align-items-center p-5 gap-5" style={{ backgroundColor: '#F6DC98' }}>
                    <img src="./img/italian.png" alt="Italy Cuisines" />
                    <div className="desc d-flex flex-column align-items-center gap-3">
                        <h1>ITALIAN CUISINES</h1>
                        <p>Italian cuisine is a Mediterranean cuisine consisting of the ingredients, recipes and cooking techniques developed across the Italian Peninsula.</p>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Cuisines