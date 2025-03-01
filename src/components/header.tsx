import Link from "next/link";
import TwiiterLogo from "public/svg/twiiter-logo";
import { Button } from "./ui/button";
import Navbar from "./ui/navbar";

export default function Header() {

  return (
    <header>
      <div className="flex flex-col gap-8 px-4">
        <nav className="flex justify-between items-center py-4">
          <div>
            <p>foto de perfil</p>
          </div>
          <div>
            <TwiiterLogo />
          </div>
          <div>
            <Link href="/sign-up">
              <Button className="flex justify-center items-center border border-blue-dark font-bold rounded-3xl w-32 h-6 text-nowrap">
                Fazer upgrade
              </Button>
            </Link>
          </div>
        </nav>
        <Navbar />
      </div>
    </header>
  );
}
