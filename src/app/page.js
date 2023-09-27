import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <header>
        <div className="flex justify-between">
          <a href="/" className="ml-8 mt-4">X</a>
          <nav>
            <ul className="flex space-x-6 mr-8 mt-4">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="flex h-screen flex-col items-center justify-between p-24">
        <div className='bg-secondary p-8 rounded-3xl flex flex-col items-center justify-between h-3/6'>
          <h1>X</h1>
          <p>This page is currently under development. It is created for a project in ToF1 St. Olav VGS</p>
          <h2>Made by</h2>
          <h3>Rohaan Mooken & Daniel Boye</h3>
        </div>
      </main>
    </div>
  )
}
