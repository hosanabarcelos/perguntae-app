import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import illustrationBanner from '../assets/images/idea.svg';
import logoImage from '../assets/images/logo.svg';

// import { useAuth } from '../hooks/useAuth';

import { Button } from '../components/Button';
import { database } from '../services/firebase';
import { useAuth } from '../hooks/useAuth';

import '../styles/auth.scss';

export function NewRoom() {

    const { user } = useAuth()
    const navigate = useNavigate()
    const [newRoom, setNewRoom] = useState('');

    async function handleCreateNewRoom(event: FormEvent) {
        event.preventDefault();

        if (newRoom.trim() === '') {
            return;
        }

        const roomRef = database.ref('rooms');

        const firebaseRoom = await roomRef.push({
            title: newRoom,
            authorId: user?.id, 
        })
        navigate(`/rooms/admin/${firebaseRoom.key}`)
    }

    return (
        <div id="page-auth">
            <aside>
                <img src={logoImage} alt="Logo do Perguntae" className="logo--responsivity" />
                <img src={illustrationBanner} alt="Ilustração" className="ilustration-banner--responsivity" />
                <strong>Na dúvida, Perguntaê!</strong>
                <p>Tire as dúvidas da sua audiência em tempo real.</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImage} alt="Logo do Perguntae" />
                    <h2>Criar uma nova sala</h2>
                    <form onSubmit={handleCreateNewRoom}>
                        <input 
                            type="text"
                            placeholder="Nome da sala"
                            onChange={event => setNewRoom(event.target.value)}
                            value={newRoom}
                        />
                        <Button type="submit">
                            Criar sala
                        </Button>
                    </form>
                    <p>
                        Quer entrar em uma sala já existente? <Link to="/home">clique aqui</Link>
                    </p>
                </div>
            </main>
        </div>
    );
}