import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Upload from '../components/Upload';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/AdminPage.css'

const AdminPage = () => {
    const [open, setOpen] = useState(false);
    // const {currentUser} = userSelector({state} => state.user);
  return (
    <>
    <div className='container-sm'>
        <Header/>
        <div className='wrapper'>
            <button onClick={() => setOpen(true)}>
                Upload Here !
            </button>
        </div>
        <Footer/>
    </div>
    {open && <Upload setOpen = {setOpen}/>}
    </>
  );
};
export default AdminPage;