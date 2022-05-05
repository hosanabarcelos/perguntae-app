import { useNavigate } from 'react-router-dom';
import { FormEvent, useState } from 'react';

import illustrationBanner from '../assets/images/banner-aside.svg';
import logoImage from '../assets/images/logo.svg';
import logoGoogle from '../assets/images/icons/logo-google.svg';

import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase';
import { Button } from '../components/Button';

import '../styles/auth.scss';

export function Home() {

    const navigate = useNavigate();
    const { signInWithGoogle, user } = useAuth();
    const [roomCode, setRoomCode] = useState('');

    async function handleCreateNewRoom() {
        if (!user) {
            await signInWithGoogle()
        }
        
        navigate('/rooms/new');
    }

    async function handleJoinRoom(event: FormEvent) {
        event.preventDefault();

        if (roomCode.trim() === '') {
            return;
        }

        //verifica se a sala realmente existe
        const roomRef = await database.ref(`rooms/${roomCode}`).get();

        if (!roomRef.exists()) {
            alert('Essa sala não existe.');
            return;
        }

        if(roomRef.val().endedAt) {
            alert('Essa sala foi fechada.');
            return;
        }

        navigate(`/rooms/${roomCode}`);
    }

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
                    <button onClick={handleCreateNewRoom} className="button-create-room">
                    <img src={logoGoogle} alt="Ilustração" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">
                        ou entre em uma sala
                    </div>
                    <form onSubmit={handleJoinRoom}>
                        <input 
                            type="text"
                            placeholder="Digite o código da sala"
                            onChange={event => setRoomCode(event.target.value)}
                            value={roomCode}
                        />
                        <Button>
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    );
}