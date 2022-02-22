import React, { useEffect, useState } from 'react';

const tabs = ["posts", "comments", 'albums'];
const Demo = () => {

    const [posts, setPosts] = useState([]);
    const [type, setType] = useState("posts");
    const [showToTop, setShowToTop] = useState(false);



    useEffect(() => {
       fetch(`https://jsonplaceholder.typicode.com/${type}`)
        .then(response => response.json())
        .then(post => {
            setPosts(post);
        })
        
    }, [type]);


    useEffect(() => {
        const handleScroll = () => {
            setShowToTop(window.scrollY >= 200);
        }

        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener(handleScroll);
        };
    }, []);

    const handleToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop =0;
    }
    return (
        <div>

            {
                tabs.map(tab => (
                    <button 
                        key={tab}
                        style={type === tab ? {
                            color : "#fff",
                            backgroundColor : "#333"
                        } : {}}
                        onClick={() => setType(tab)}
                    >
                        {tab}
                    </button>
                ))
            }
            <ul>
                {
                    posts.map(post => (
                        <li key={post.id}>{post.title || post.name}</li>
                    ))
                }
            </ul>

                {
                    showToTop && <button 
                        style={{
                            position : "fixed",
                            bottom : 20,
                            right : 20
                        }}
                        onClick={handleToTop}
                        >
                        To Top
                    </button>
                }
        </div>
    );
}

export default Demo;
