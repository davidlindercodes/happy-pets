import { Section } from './Section';


const Map = () => (
    <Section yPadding="py-6">
        <div className="w-full text-center sm:px-6 pb-10 sm:pb-12">
            <h3 className="text-3xl text-gray-900 font-semibold">Visit Us</h3>
        <div className="mt-4 sm:mt-6 text-xl leading-9">We look forward to seeing you</div>
      </div>
 
        <a target="_blank" href="https://www.google.com/maps/dir//Happy+Pets+%26+Aquatics,+9+Hennel+Ln,+Walton-le-Dale,+Preston+PR5+4LA/@53.7435893,-2.6760654,17z/data=!3m1!5s0x487b72f0969b5e1f:0x9183ae02b31fc788!4m9!4m8!1m0!1m5!1m1!1s0x487b72f0954d9a89:0x28800b747638bdf4!2m2!1d-2.6738767!2d53.7435893!3e0">
            <img style={{'minHeight':'350px', 'objectFit': 'cover'}} src="/images/happy-pets-map.png"  alt="Map location of Happy Pets"/>                  
        </a>

    </Section>
);

export { Map };