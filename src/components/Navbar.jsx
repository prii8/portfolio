import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo,menu,close } from '../assets'


const Navbar = () => {
  const[active,setactive]=useState('');

  return (
    <nav
    className={`${styles.paddingX} py-5 w-full flex items-center fixed top-0 z-20 bg-primary`}
    >
      <div className='w-full flex justify-between items-center
      max-w-7xl mx-auto'>
        <Link 
        to="/"
        className='flex items-center gap-2'
        onClick={()=>{
          window.scroll(0,0);
          setactive("");
        }}
        >
          <img src={logo} className='w-9 h-9 object-contain'/>
        
        </Link>
        
      </div>
    </nav>
  )
}

export default Navbar