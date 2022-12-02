import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Test from '../components/test'
import styles from '../styles/Home.module.css'

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:3000/data.json')
  const data = await res.json()

  return {
    props: {
      slider:data.slider
    }
  }
}


export default function Home({slider}) {
  return (
    <div className={styles.main}>
      <Navbar />
      <Slider items={slider}/>
    </div>
  )
}
