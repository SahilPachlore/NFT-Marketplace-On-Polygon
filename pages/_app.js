import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div>
            <nav className="border-b p-6">
        <p className="text-4xl font-bold">Yinex Marketplace</p>
        <div className="flex mt-4">
          <Link href="/">
            <h1>
              
            <a className="mr-4 text-pink-500">
              Home
            </a></h1>
          </Link>
          <Link href="/create-item">
            <a className="mr-6 text-pink-500">
              Sell NFT
            </a>
          </Link>
          <Link href="/my-assets">
            <a className="mr-6 text-pink-500">
              My NFTs
            </a>
          </Link>
          <Link href="/creator-dashboard">
            <a className="mr-6 text-pink-500">
              Dashboard
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
