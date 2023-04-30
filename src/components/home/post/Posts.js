import { useEffect, useState } from "react";

import { useSearchParams } from "react-router-dom";

import { API } from '../../../service/api';

//components
import Post from "./Post.js";
import "../post/posts.css";

const Posts = () => {

    const [posts, setPosts] = useState([]);

    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');

    useEffect(() => {
        const fetchData = async () => {
            let response = await API.getAllPosts({category: category || '' });
            if (response.isSuccess) {
                setPosts(response.data);
            }
        }
        fetchData();
    },[category])

    return (
        <>
            <div className="container my-4">
                <div className="row">
                    {
                        posts.map(post => (
                            <div className="col-md-6">
                                <Post post={post}/>
                            </div>
                        ))
                    }
                </div>

            </div>
        </>
    )
}

export default Posts;