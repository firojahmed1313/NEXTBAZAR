import Image from 'next/image'
import NavH from '../component/header/NavH'
import Navber from '../component/header/Navber'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Navber/>
      <h1>MD FIROJ AHMED</h1>
      <Link href="/product" className='text-black inline-block px-5 py-3 border border-gray-700 text-center rounded-2xl justify-center'>Product</Link>
    </>
    

  )
}
