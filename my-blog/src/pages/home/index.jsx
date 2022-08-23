import React, {useEffect, useState} from "react";
import FeaturePost from "../../components/featurespost";
import PostList from "../../components/postlist";
const mock = [
  {
    image:
      "https://coisasdojapao.com/wp-content/uploads/2016/12/monte-fuji.jpg",
    date: "January 28, 2021",
    title: "Monte Fuji",
    description: "Apenas uma bela foto do explendoso Monte Fuji.",
    alt: "Monte fuji",
  },
  {
    image:
      "https://magazine.zarpo.com.br/wp-content/uploads/2022/02/capa_praia-do-caribe_zarpo.jpg",
    date: "January 28, 2021",
    title: "Monte Fuji",
    description: "Apenas uma bela foto do explendoso Monte Fuji.",
    alt: "Monte fuji",
  },
  {
    image:
      "https://p1.pxfuel.com/preview/777/334/535/cactus-sunrise-desert-landscape.jpg",
    date: "January 28, 2021",
    title: "Monte Fuji",
    description: "Apenas uma bela foto do explendoso Monte Fuji.",
    alt: "Monte fuji",
  },
];
export default function Home() {
  const [posts, setPosts] = useState(mock);

  async function getPosts(){
        const res = await fetch("https://cms-blog-tutorial.herokuapp.com/api/posts");
        console.log("Resposta da API", res);
  }

  useEffect(() => {
    getPosts();
  
  }, []);
  return (
    <div>
     {posts && posts.length > 0 ?  <FeaturePost post={posts[0]}/> : "Desculpe, mas infelizmente ocorreu algum erro ao exibir seu post."}
      <PostList posts={posts}/>
    </div>
  );
}
