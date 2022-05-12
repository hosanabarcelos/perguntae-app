import { useNavigate } from 'react-router-dom';

import { Button } from '../components/Button';

import logoImg from '../assets/images/banner-landing.svg';
import '../styles/landing.scss';


export function Landing() {
    const navigate = useNavigate();

    async function handleJoinHome() {
        navigate('/home');
    }
    return (
            <div className="master-content">
                <div className="content">
                    <div className="left-content">
                        <h1>Na dúvida, Perguntaê!</h1>
                        <p>Crie salas e aumente a participação<br /> da sua audiência, de maneira interativa.</p>
                        <div className="buttons">
                            <Button onClick={handleJoinHome}>Criar sala agora</Button>
                            <Button onClick={handleJoinHome}>Entrar em uma sala</Button>
                        </div>
                    </div>
                    <div className="right-content">
                        <img src={logoImg} alt="logo" />
                    </div>
                </div>
            </div>
    );
}