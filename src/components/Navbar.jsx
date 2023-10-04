import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../styles'
import { navLinks } from '../constants'
import { logo1,menu,close } from '../assets'


const Navbar = () => {
  const[active,setactive]=useState('');
  const[toggle,setToggle]=useState(false);

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
          <img src={logo1} className='w-9 h-9  rounded-[50%]'/>
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">Priyanshi &nbsp; <span className="sm:block hidden">| Khippal </span></p>
        </Link>

        <ul className="list-none  hidden sm:flex flex-row gap-10">
          {navLinks.map((nav)=>(
            <li 
            key={nav.id}
            className={`${active===nav.title?"text-white":"text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={()=>{setactive(nav.title)}}
            >
            <a href={`#${nav.id}`}>{nav.title}</a>
              
            </li>
          ))}
        </ul>

   
        
      </div>

      <div className='sm:hidden flex flex-2 justify-end items-center '>
            <img src={toggle? close:menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={()=>{setToggle(!toggle)}}
            ></img>
      </div>

      <div className={`sm:hidden ${!toggle ?"hidden":"flex"} p-6 black-gradient
      absolute top-[3.5rem] right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl
      `}>
      <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
          {navLinks.map((nav)=>(
            <li 
            key={nav.id}
            className={`font-poppins font-medium cursor-pointer text-[16px] ${active===nav.title?"text-white":"text-secondary"}hover:text-white text-[18px] font-medium cursor-pointer`}
            onClick={()=>{
              setToggle(!toggle);
              setactive(nav.title);
            }}
            >
            <a href={`#${nav.id}`}>{nav.title}</a>
              
            </li>
          ))}
        </ul>
      </div>

      
    </nav>
  )
}

export default Navbar