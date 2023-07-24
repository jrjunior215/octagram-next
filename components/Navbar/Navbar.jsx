import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import style from './Navbar.module.css'
import '../../fonts/font-awesome-4.7.0/css/font-awesome.min.css'

const Navbar = () => {
  return (
    <nav className={style.nav_bar}>
      <div className={style.navbar_container}>
        <Link href="/" >
          <div className={style.nav_icon}>
            <Image src="/icon.png" alt="Logo" width={45} height={40} />
            <h1>OCTAGRAM</h1>
          </div>
        </Link>
        <div className={style.line_box}>
        </div>
        <ul className={style.nav_links}>
          <li><Link href="/" legacyBehavior><a>HOME</a></Link></li>
          <li><Link href="/product" legacyBehavior><a>PRODUCT</a></Link></li>
          <li><Link href="/creator" legacyBehavior><a>CREATOR</a></Link></li>
          <li><Link href="/contact" legacyBehavior><a>CONTACT</a></Link></li>
        </ul>
        <ul className={style.nav_register}>
          <li><Link href="/login" legacyBehavior><a>SIGN IN</a></Link></li>
          <li><Link href="/register" legacyBehavior><a className={style.btn_reg}>SIGN UP</a></Link></li>
        </ul>
        <div className={style.nav_btn}>
          <i class="fa fa-bars" aria-hidden="true"></i>
        </div>

        <div className={style.dropdown_menu}>
          <ul className={style.dropmenu}>
            <li><Link href="/" legacyBehavior><a>HOME</a></Link></li>
            <li><Link href="/product" legacyBehavior><a>PRODUCT</a></Link></li>
            <li><Link href="/creator" legacyBehavior><a>CREATOR</a></Link></li>
            <li><Link href="/contact" legacyBehavior><a>CONTACT</a></Link></li>
            <li><Link href="/login" legacyBehavior><a>SIGN IN</a></Link></li>
            <li><Link href="/register" legacyBehavior><a className={style.btn_reg}>SIGN UP</a></Link></li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navbar
