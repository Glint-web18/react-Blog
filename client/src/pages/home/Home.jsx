import { useLocation } from "react-router";
import { useEffect,useState } from "react";
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import "./home.css"
import axios from 'axios';

export default function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async ()=>{
           const res = await axios.get("http://localhost:5000/api/posts")
           setPosts(res.data)
        }
        fetchPosts()
    }, [])

    const location = useLocation();
    console.log(location);
    return (
        <>
        <Header />
        <div className ="home">
            <Posts posts={posts}/>
            <Sidebar/>
    
        </div>
    </>
    )
}
