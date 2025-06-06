import React from 'react'
import PrivacyPolicy from '../component/PrivacyPolicy';

export const metadata = {
  title: "Privacy Policy | NSF Design Studio",
  description: "Read NSF Design Studio’s Privacy Policy to understand how we collect, use, and protect your personal information when you interact with our website and services.",
};


export default function page() {
  return (
    <div>
      <PrivacyPolicy/>
    </div>
  )
}
