import React from 'react';
import { useHistory } from 'react-router-dom';
import profile_image from '../../assets/images/profile.png';
import ListPost from './ListPosts';
import { useSelector } from 'react-redux';

function Home() {
    const history = useHistory();

    const posts = useSelector(state => state.posts.list);

    function handleLogout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        history.push('/login')
    }

    console.log('Tela de Home')

    return (
        <main className="page_container">
            <nav className="header_navbar">
                <div className="profile_info">
                    <div className="text_info_container center_content pd_h_1">
                        <span>{JSON.parse(localStorage.getItem('user'))?.email}</span>
                    </div>
                    <div className="image_info_container center_content">
                        <img alt="imagem de perfil do usuário" src={profile_image}></img>
                    </div>
                    <div className="option_dropdown">
                        <button onClick={handleLogout} className="btn_danger">Sair</button>
                    </div>
                </div>
            </nav>

            <div className="flex_start_content pd_h_2">
                <h5>{` ${posts.length} - Episódios Encontrados`}</h5>
            </div>

            <ListPost />
        </main>
    );
}

export default Home;