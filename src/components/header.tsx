import Link from 'next/link'
import TwiiterLogo from 'public/svg/twiiter-logo'
import { Button } from './ui/button'
import Navbar from './ui/navbar'

export default function Header() {
  return (
    <header>
      <div className='flex flex-col gap-8 px-4 text-white'>
        <nav className='flex items-center justify-between py-4'>
          <div>
            <p>foto de perfil</p>
          </div>
          <div>
            <TwiiterLogo />
          </div>
          <div>
            <Link href='/sign-up'>
              <Button className='border-blue-dark flex h-6 w-32 items-center justify-center rounded-3xl border font-bold text-nowrap'>
                Fazer upgrade
              </Button>
            </Link>
          </div>
        </nav>
        <Navbar />
      </div>
    </header>
  )
}
