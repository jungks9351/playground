import React from 'react';
import axios from 'axios';

const PostList = ({ postImg }) => {
  console.log(postImg);
  return <img src={postImg} />;
};

export async function getStaticProps() {
  const res = await axios.get('https://api.thecatapi.com/v1/images/search');
  const postImg = res.data[0].url;
  if (!postImg) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      postImg,
    },
  };
}

export default PostList;
