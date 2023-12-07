import { fireauth } from '../config/firebase'
import { signOut } from 'firebase/auth'
import { useNavigate, Link } from 'react-router-dom'
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
            <div className="cuisine-main">
                <div className="cuisine-title">
                    <h1 className="cuisine-mb-0">CUISINES</h1>
                </div>
                <div className="cuisine-link" onClick={() => navigate('/menu', { state: 'indian' })}>
                    <div className="cuisine-box">
                        <img src="./img/indian.png" alt="Indian Cuisines" />
                        <div className="cuisine-desc">
                            <h1>INDIAN CUISINES</h1>
                            <p>Indian cuisine consists of a variety of regional and traditional cuisines native to India.</p>
                        </div>
                    </div>
                </div>

                <div className="cuisine-link" onClick={() => navigate('/menu', { state: 'chinese' })}>
                    <div className="cuisine-box">
                        <img src="./img/chinese.png" alt="Chinese Cuisines" />
                        <div className="cuisine-desc">
                            <h1>CHINESE CUISINES</h1>
                            <p>Chinese cuisine is one of the oldest and most diverse cuisines in the world.</p>
                        </div>
                    </div>
                </div>

                <div className="cuisine-link" onClick={() => navigate('/menu', { state: 'italian' })}>
                    <div className="cuisine-box ">
                        <img src="./img/italian.png" alt="Italy Cuisines" />
                        <div className="cuisine-desc">
                            <h1>ITALIAN CUISINES</h1>
                            <p>Italian cuisine is a Mediterranean cuisine consisting of the ingredients, recipes and cooking techniques developed across the Italian Peninsula.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cuisines