import React from 'react';
import mic_image from '../../assets/images/mic.png';
import { setList } from '../../redux/features/posts'
import { useDispatch, useSelector } from 'react-redux';

function ListPosts() {

    const [loading, setLoading] = React.useState(false);

    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.list);

    function listAllPosts() {
        setLoading(true)
        fetch('http://localhost:3333/post')
            .then(response => response.json())
            .then(data => {
                dispatch(setList(data));
                setLoading(false);
            })
            .catch(err => {
                setLoading(false);
                console.log(err)
            })
    }

    React.useEffect(() => {
        listAllPosts()
    }, []);

    console.log('Tela de Posts')
    return (
        <section className="dashboard_posts_containers">
            <button onClick={listAllPosts} >Refresh</button>
            <ul className="posts_list">
                {
                    loading ?
                        <h1>. . .</h1>
                        :
                        !!posts ?
                            posts.map((post, index) =>
                                <li key={`post_${index}`}>
                                    <div className="post_container">
                                        <div className="image_container center_content">
                                            <img alt="imagem da postagem" src={mic_image} />
                                        </div>
                                        <div className="info_container">
                                            <div className="title_container">
                                                <span>{post.title}</span>
                                            </div>
                                            <div className="description_container">
                                                <span>{post.description}</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )
                            : <h1>Nenhum Episódio Listado</h1>
                }
            </ul>
        </section>
    );
}

export default ListPosts;