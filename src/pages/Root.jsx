import React from 'react'
import { Outlet } from "react-router-dom";
import Header from '../composants/Header';
import Footer from '../composants/Footer';


export default function Root() {
  return (
    <div><Header/>
    <main className='container'><Outlet/></main>
    <Footer/></div>
  )
}
