import React from 'react'
import Facebook from '../../assets/icons/facebook';
import Twitter from '../../assets/icons/twitter';
import Instagram from '../../assets/icons/instagram';
import YouTube from '../../assets/icons/youtube';
import { sci } from './contactme.module.scss'
function ContactMe() {
  return (
    <ul className={sci}>
        <li> <Facebook  /> </li>
        <li> <Twitter /> </li>
        <li> <Instagram/> </li>
        <li> <YouTube /> </li>
    </ul>
  )
}

export default ContactMe