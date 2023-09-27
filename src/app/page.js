import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between p-24">
      <div className='bg-slate-700 p-8 rounded-3xl flex flex-col items-center justify-between h-3/6'>
        <h1>X</h1>
        <p>This page is currently under development. It is created for a project in ToF1 St. Olav VGS</p>
        <h2>Made by</h2>
        <h3>Rohaan Mooken & Daniel Boye</h3>        
      </div>
    </main>
  )
}
