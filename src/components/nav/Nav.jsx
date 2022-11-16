import {AiOutlineHome,AiOutlineUser} from 'react-icons/ai'
import {BiBook,BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import './nav.css'
import { fadeUp,viewPort } from '../../animate'
import {motion} from "framer-motion"


import {useState} from 'react'

export default function Nav(){
    const [active,setActive] = useState('#')

    const navItem = [
        {   url:"#" , icon: <AiOutlineHome/>},
        {   url:"#about" , icon: <AiOutlineUser/>},
        {   url:"#services" , icon: <RiServiceLine/>},
        {   url:"#portfolio" , icon: <BiBook/>},
        {   url:"#contact" , icon: <BiMessageSquareDetail/>},
    ];

    const navMenu = navItem.map(({url,icon}) =>  (
        <a href={url} onClick={()=> setActive(url)} className={active === url ? 'active':''}>
            {icon}
        </a>
    ))

    return(
        <motion.nav
            animate = {fadeUp.onScreen}
            initial = {fadeUp.offScreen}
            variants = {fadeUp}
            viewport = {viewPort}
            transition={{ delay: 2}}
        >
            { navMenu }
        </motion.nav>
    )
}