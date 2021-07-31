import Link from 'next/link';
import { Section } from './Section';
import { Logo } from '../templates/Logo';
import Image from 'next/image';

const Header = () => (
    <Section yPadding="py-6">
      <div className="flex flex-wrap justify-between items-center">
        <div>
          <Link href="/">
            <a>{<Logo xl />}</a>
          </Link>
        </div>
        <nav>
          <div className="navbar flex items-center font-medium text-xl text-gray-800">
            <div className={'hidden sm:contents'}>
              <a className={'flex'} href="tel:+44-1772-886400">
                <Image width={25} height={20} src="/images/phone.png" alt=""/>    
                <p className={'mb-0 ml-2 mr-8'}>Call Now</p>
              </a>
              <a className={'flex'} target="_blank" href="https://www.google.com/maps/dir//Happy+Pets+%26+Aquatics,+9+Hennel+Ln,+Walton-le-Dale,+Preston+PR5+4LA/@53.7435893,-2.6760654,17z/data=!3m1!5s0x487b72f0969b5e1f:0x9183ae02b31fc788!4m9!4m8!1m0!1m5!1m1!1s0x487b72f0954d9a89:0x28800b747638bdf4!2m2!1d-2.6738767!2d53.7435893!3e0">
                <Image width={30} height={20} src="/images/directionIcon.png" alt=""/>  
                <p className={'mb-0 ml-2 mr-4'}>Get Directions</p>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </Section>
);

export { Header };