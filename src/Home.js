import React from 'react'
import HomeCard from './HomeCard'
import web from "../src/images/img2.svg";


export default function Home() {
  return (
    <>
      <HomeCard
        name="Grow your business with"
        imgsrc={web}
        visit="/service"
        btname="Get Started"
      />
    </>
  )
}
