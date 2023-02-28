import React from 'react'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

import AdminNav from '../../admin/AdminNav';
import { useLocation } from 'react-router-dom';

const Main = () => {

  const location = useLocation()

  return (
    <>

        {
          location.pathname.startsWith('/dashboard') ? <AdminNav></AdminNav> : <Header></Header>
        }


        {/* <Header></Header> */}
        <Outlet></Outlet>
        <Footer></Footer>
    </>
  )
}

export default Main