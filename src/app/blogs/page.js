import React from 'react'
import BlogPage from '../component/BlogPage';

export const metadata = {
  title: "Blogs | NSF Design Studio",
  description: "Stay updated with the latest design trends, tips, and insights from the creative minds at NSF Design Studio.",
};

export default function page() {
  return (
    <div>
      <BlogPage/>
    </div>
  )
}
