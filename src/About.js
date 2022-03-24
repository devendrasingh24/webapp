import React from 'react'
import HomeCard from './HomeCard';
import web from "../src/images/img2.svg";
import Form from "./Form"




export default function About() {
  return (
    <>
      <HomeCard
        name="Welcome to about page"
        imgsrc={web}
        visit="/service"
        btname="Get Started"/>
    <Form/>
    </>
    
    
  )
}
