import illustrationBanner from '../assets/images/banner-aside.svg';
import logoImage from '../assets/images/logo.svg';
import logoGoogle from '../assets/images/icons/logo-google.svg';

import '../styles/auth.scss';

export function Home() {
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
                    <button className="button-create-room">
                    <img src={logoGoogle} alt="Ilustração" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">
                        ou entre em uma sala
                    </div>
                    <form>
                        <input 
                            type="text"
                            placeholder="Digite o código da sala"
                        />
                        <button type="submit">
                            Entrar na sala
                        </button>
                    </form>
                </div>
            </main>
        </div>
    );
}