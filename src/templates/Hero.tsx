import Image from 'next/image';
import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { Header } from '../layout/Header';
import  shop  from '../../public/images/outside-of-shop.jpeg';
import { Clock } from '../feature/OpeningTime'

const Hero = () => (
  <Background color="bg-gray-100">
  <Header />
    <Section yPadding="pt-20 pb-32">
      <div className={'grid md:grid-cols-2'}>
        <div className="text-center">
          <h1 className="text-5xl md:text-5xl text-gray-900 font-bold whitespace-pre-line leading-hero">
            Happy Pets <br className={'hidden md:d-block'} />  & Aquatics
          </h1>
          <div className="text-2xl md:text-lg mt-4 mb-10 text-black">
            The Best Pet Shop in the Lancashire
          </div>
          <div>
              <Clock />
              <p className="mt-7 text-black font-bold"> See full opening times </p>
          </div>
        </div>
        <div className={'hidden md:block my-auto'}>      
          <Image className="rounded" src={shop} />
        </div>
      </div>  
    </Section>
  </Background>
);

export { Hero };