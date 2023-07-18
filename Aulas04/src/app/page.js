import Image from 'next/image'
import Link from '../components/Link/Link'

export default function Home() {
  return (
    <>
    <div>
      <h1>Home</h1>
      <Link href="/layout">
        Layout
      </Link>
    </div>
    </>
  )
}
