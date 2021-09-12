import { Header } from '../layout/Header';
import { Clock } from '../feature/OpeningTime'

const Hero = () => (
  <div id="topfold">
  
 <Header />
<section className="py-20 topfold">  
      <div className={'grid lg:grid-cols-2'}>
        <div> </div>
        <div className="text-center p-10 lg:mr-20 text-white mx-auto lg:mx-0" style={{width: 'fit-content',}}>
          <h1 className="text-5xl md:text-5xl text-white font-bold whitespace-pre-line leading-hero">
            Happy Pets <br className={'hidden md:d-block'} />  & Aquatics
          </h1>
          <div className="text-2xl md:text-lg mt-4 mb-10 text-white font-bold">
            The Best Pet Shop in the Lancashire
          </div>
          <div>
              <Clock />
              <a href="#openingTimes"> 
              <p className="mt-7 font-bold text-black bg-white border-2 border-white mx-auto px-6 py-2 rounded" style={{width: 'fit-content'}}> See full opening times </p>
              </a>
          </div>
        </div>
      </div>  
 </section>    

  </div>
);

export { Hero };