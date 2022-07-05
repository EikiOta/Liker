import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  let  a:number = 2;
  let  b:number = 1;


  return (
    <div>
      <h1 className="test"> {a}</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      
    </div>
  )
}

export default Home
