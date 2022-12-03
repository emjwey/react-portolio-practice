import { useEffect, useState } from "react";

export default function useFetchDetails() {
  const [posts, setPosts] = useState([]);  	
    
  useEffect(() => {
    fetch("https://cdn.jsdelivr.net/gh/emjwey/react-portfolio/public/data.json")
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return posts;
}