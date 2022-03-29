import { Link } from 'react-router-dom';

import illustrationBanner from '../assets/images/banner-aside.svg';
import logoImage from '../assets/images/logo.svg';

// import { useAuth } from '../hooks/useAuth';

import { Button } from '../components/Button';

import '../styles/auth.scss';

export function NewRoom() {
    // const { user } = useAuth();

    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationBanner} alt="Ilustração" />
                <strong>Na dúvida, Perguntaê!</strong>
                <p>Tire as dúvidas da sua audiência em tempo real.</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImage} alt="Logo do Perguntae" />
                    <h2>Criar uma nova sala</h2>
                    <form>
                        <input 
                            type="text"
                            placeholder="Digite o código da sala"
                        />
                        <Button type="submit">
                            Criar sala
                        </Button>
                    </form>
                    <p>
                        Quer entrar em uma sala já existente? <Link to="/">clique aqui</Link>
                    </p>
                </div>
            </main>
        </div>
    );
}