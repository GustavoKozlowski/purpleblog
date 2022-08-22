import React from "react";
import FeaturePost from "../../components/featurespost";
import PostList from "../../components/postlist";
export default function Home() {
  const posts = [
    {
        image:"https://i.pinimg.com/564x/50/b6/13/50b613ff6625f02052822e66567a5b38.jpg",
        date:"",
        title:"",
        description:"",
    },
    {
        image:"https://www.shutterstock.com/image-photo/mountains-under-mist-morning-amazing-nature-1725825019",
        date:"",
        title:"",
        description:"",
    },
    {
        image:"https://pin.it/5lZUSJ5",
        date:"",
        title:"",
        description:"",
    },
  ]
  return (
    <div>
      <FeaturePost />

      <PostList posts={posts} />
    </div>
  );
}
