import axios from 'axios'
import { useEffect, useState } from "react";

const FetchingData = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const asyncGet = async () => {
            let jsonResponse = {};
            try {
                jsonResponse = await axios.get('localhost:3000/posts/');
                console.log(jsonResponse.data);
            } catch (error) {
                console.log(error);
            }
        };

        asyncGet();
    }, []);

    return (
        <>
            {posts.length ? (
                posts.map((post) => {
                    return (
                        <div key={post.id}>
                            <p>{post.title}</p>
                            <p>{post.body}</p>
                        </div>
                    );
                })
            ) : (
                <Loading />
            )

            }
        </>
    );
};

export default FetchingData;