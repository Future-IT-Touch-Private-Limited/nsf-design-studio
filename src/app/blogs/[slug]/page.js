import BlogInner from '@/app/component/BlogInner'
import React from 'react'
import { swiperBlogList } from '@/app/blogdata';
// const blogs=[
//   {
//     title: 'Frequently Utilized Metal Welding System',
//     img: '/images/why-choose-img-4.webp',
//   },
//   {
//     title: 'How Does One Go About Buying Furniture?',
//     img: '/images/why-choose-img-3.webp',
//   },
//   {
//     title: 'Four Ways for Creating Extra Space in Small Homes',
//     img: '/images/why-choose-img-2.webp',
//   },
// ]







export const generateStaticParams = () => {
  return swiperBlogList.map((blog, index) => {
    return {
      slug: blog.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
    };
  });
};


export default function page({params:{slug}}) {

  const singleBlog = swiperBlogList.find((blog) =>
    blog.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "") === slug
  );
  
  return (
    <div>
        <BlogInner singleBlog={singleBlog}/>
    </div>
  )
}
