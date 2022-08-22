import React from "react";
import FeaturePost from "../../components/featurespost";


import PostList from "../../components/postlist";
export default function Home() {
  const posts = [
    {
        image: 'https://coisasdojapao.com/wp-content/uploads/2016/12/monte-fuji.jpg',
        date :"January 28, 2021",
        title:"Monte Fuji",
        description :"Apenas uma bela foto do explendoso Monte Fuji.",
        alt: 'Monte fuji',
    },
  ]
  return (
    <div>
      <FeaturePost />

      <PostList posts={posts} />
    </div>
  );
}
