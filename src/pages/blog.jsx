import React from 'react';
import axios from 'axios';
  
const Post = () => {
   const [posts, setPost] = React.useState(null);
   const style = {
    background: "radial-gradient( blue, transparent)",
    margin:'30px',
    padding:'10px',

   }
   
   

   React.useEffect(() => {
    axios
    .get("http://jsonplaceholder.typicode.com/posts")
    .then((response) => setPost (response.data));
   },[]);

   return (
    <>
     {!posts ? (
        <marquee> no post at the moment. check your network </marquee>
     ):(
        <div>
            {posts.map((post) => (
                <div style={style}
                    className = 'post'
                    key = {post.id}>
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
     )}
    </>
   );
}
export default Post