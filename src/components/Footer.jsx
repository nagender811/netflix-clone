import React from 'react'
import youtube_icon from '../assets/youtube_icon.png'
import twitter_icon from '../assets/twitter_icon.png'
import instagram_icon from '../assets/instagram_icon.png'
import facebook_icon from '../assets/facebook_icon.png'

const Footer = () => {
  return (
    <div className='py-7 px-[4%] max-w-[1000px] my-0 mx-auto'>
      <div className='flex gap-5 my-10 mx-0'>
        <img className='w-7 cursor-pointer' src={facebook_icon} alt="" />
        <img className='w-7 cursor-pointer' src={instagram_icon} alt="" />
        <img className='w-7 cursor-pointer' src={twitter_icon} alt="" />
        <img className='w-7 cursor-pointer' src={youtube_icon} alt="" />
      </div>
      <ul className='grid grid-col gap-4 list-none grid-cols-4'>
        <li>Audio Description</li>
        <li>Help centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Invester Relations</li>
        <li>Job</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='text-gray-500 mt-7'>&copy; 1997-2023 Netflix, Inc.</p>
    </div>
  )
}

export default Footer
