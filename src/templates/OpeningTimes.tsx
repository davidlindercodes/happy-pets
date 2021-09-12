import { Background } from '../background/Background';
import { Section } from '../layout/Section';

const OpeningTimes = () => (
    <div id="openingTimes"> 
        <Background color="bg-gray-100">
            <Section yPadding="pt-20 pb-20">
            <div className="flex flex-wrap items-center">
                <div className="w-full sm:w-1/2">
                    <div className="mx-auto " style={{width: 'fit-content',}}> 
                        <h3 className="text-3xl text-gray-900 font-semibold text-center" id="openingTimes"> Opening Hours </h3>
                        <div className="flex mt-6 text-xl leading-9"> 
                            <p>
                                Mon - Friday : <br /> 
                                Sat: <br /> 
                                Sun:<br />
                            </p>
                            <p className="ml-8">
                                9 AM – 6 PM <br /> 
                                9 AM – 5 PM <br /> 
                                11 AM – 4 PM <br />
                            </p>
                        </div> 
                </div>
                </div>
                <div className="w-full sm:w-1/2 mt-10 sm:mt-0">
                <img className="mx-auto" src="/images/outside-of-shop.jpeg" />
                </div>
            </div>
            </Section>
        </Background>
    </div> 
  );
  
  export { OpeningTimes };