import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import style from './Home.module.css'

export default function Home() {
  return (
    <main>
      <div className={style.container_octagram}>
        <div className={style.container_box}>
          <div className={style.container_text}>
            <h1>OCTAGRAM</h1>
            <p>Octagram gives creators the tools they need to reliably reach their fans, strengthen 
            their communities, and build sustainable businesses. </p>
            <ul>
              <li><Link href="/register" legacyBehavior><a className={style.btn_reg}>GET STARTED?</a></Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className={style.container_announce}>
        
      </div>
    </main>
  )
}