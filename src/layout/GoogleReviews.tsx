import { Section } from './Section';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';


const Reviews = () => (
    <Section yPadding="py-10 sm:py-20">
        <h3 className="text-3xl text-gray-900 font-semibold text-center mb-5">Why Our Customers <br className="sm:hidden"/> Love Us ... </h3>
        <div className="flex justify-center mt-6">
        <Splide   options={ {
                    type: "loop",
                    perMove: 1,
                    autoplay: true,
                    speed: 400,
                    rewind : true,
                    width  : '75%',
                    gap    : '1rem',
                    perPage: 3,
                    arrows: false,
                    breakpoints: {
                        1280: {
                            perPage: 3,
                        },
                        768: {
                            perPage: 2,
                        },
                        640: {
                            perPage: 1,
                        },
                    }
                } }>
            <SplideSlide>
                <div className="border-1 p-4 border border-gray-300 rounded relative" style={{height:'475px'}}>
                    <img className="w-full h-24 w-24 mx-auto" src="/images/reviews/IsaacAckerley.png" />
                    <p className="text-black text-lg font-bold text-center mt-1">Isaac Ackerley</p>
                    <p className="text-center text-sm mb-1.5 -mt-1">Local Guide</p>
                    <img className="w-28 mx-auto mb-1" src="/images/reviews/fiveStars.png" />
                    <p className="text-center text-sm pb-12">Callum was very helpful and kind, brilliant place to bring your furry friend for a little day trip. Incredibly knowledgeable guy and for a small stand alone shop the prices are great. Not giving any more money to pets at home or any chain. Support your local business!!</p> 
                    <div className="flex justify-center absolute mt-6 bottom-4" style={{'left':'50%', 'transform': 'translateX(-50%)', 'width':'100%'}}> 
                        <img className="w-4 h-4 mt-1 mr-2" src="/images/reviews/g_logo.png" />
                        <p className="text-sm">
                            a month ago
                        </p>
                    </div>    
                </div>
            </SplideSlide>
            <SplideSlide>
            <div className="border-1 p-4 border border-gray-300 rounded relative"  style={{height:'475px'}}>
                <img className="w-full h-24 w-24 mx-auto" src="/images/reviews/carrieCrossley.png" />
                <p className="text-black text-lg font-bold text-center mt-1">Carrie Crossley</p>
                <p className="text-center text-sm mb-1.5 -mt-1">Local Guide</p>
                <img className="w-28 mx-auto mb-1" src="/images/reviews/fiveStars.png" />
                <p className="text-center text-sm pb-12">Excellent customer service and great knowledge. Our dog loves the stores own food and is always greeted with a smile ad a treat.</p> 
                <div className="flex justify-center absolute mt-6 bottom-4" style={{'left':'50%', 'transform': 'translateX(-50%)', 'width':'100%'}}> 
                    <img className="w-4 h-4 mt-1 mr-2" src="/images/reviews/g_logo.png" />
                    <p className="text-sm">
                        a month ago
                    </p>
                </div>
            </div>
            </SplideSlide>
            <SplideSlide>
            <div className="border-1 p-4 border border-gray-300 rounded relative"  style={{height:'475px'}}>
                <img className="w-full h-24 w-24 mx-auto" src="/images/reviews/alanaPlayz.png" />
                <p className="text-black text-lg font-bold text-center mt-1">Alana Playz</p>
                <p className="text-center text-sm mb-1.5 -mt-1">12 reviews</p>
                <img className="w-28 mx-auto mb-1" src="/images/reviews/fiveStars.png" />
                <p className="text-center text-sm pb-12">Very friendly and helpful 👌🙂</p> 
                <div className="flex justify-center absolute mt-6 bottom-4" style={{'left':'50%', 'transform': 'translateX(-50%)', 'width':'100%'}}> 
                    <img className="w-4 h-4 mt-1 mr-2" src="/images/reviews/g_logo.png" />
                    <p className="text-sm">
                        2 months ago
                    </p>
                </div>
            </div>
            </SplideSlide>
            <SplideSlide>
            <div className="border-1 p-4 border border-gray-300 rounded relative"  style={{height:'475px'}}>
                <img className="w-full h-24 w-24 mx-auto" src="/images/reviews/danielWikholm.png" />
                <p className="text-black text-lg font-bold text-center mt-1">Daniel Wikholm</p>
                <p className="text-center text-sm mb-1.5 -mt-1">3 reviews</p>
                <img className="w-28 mx-auto mb-1" src="/images/reviews/fiveStars.png" />
                <p className="text-center text-sm pb-12">Amazing pet shop! Callum and Maria are very friendly. I would recommend it to anyone I know who has a pet.</p> 
                <div className="flex justify-center absolute mt-6 bottom-4" style={{'left':'50%', 'transform': 'translateX(-50%)', 'width':'100%'}}> 
                    <img className="w-4 h-4 mt-1 mr-2" src="/images/reviews/g_logo.png" />
                    <p className="text-sm">
                        2 months ago
                    </p>
                </div>
            </div>
            </SplideSlide>
            <SplideSlide>
            <div className="border-1 p-4 border border-gray-300 rounded relative"  style={{height:'475px'}}>
                <img className="w-full h-24 w-24 mx-auto" src="/images/reviews/edwardSpeak.png" />
                <p className="text-black text-lg font-bold text-center mt-1">Edward Speak</p>
                <p className="text-center text-sm mb-1.5 -mt-1">20 reviews</p>
                <img className="w-28 mx-auto mb-1" src="/images/reviews/fiveStars.png" />
                <p className="text-center text-sm pb-12">Brill little shop didn't realise it was so big, needed a new light for my new fishtank and the guy behind the till really helped me out this is my new local pet shop and I would go there over pets at home deffinatly recommend it</p> 
                <div className="flex justify-center absolute mt-6 bottom-4" style={{'left':'50%', 'transform': 'translateX(-50%)', 'width':'100%'}}> 
                    <img className="w-4 h-4 mt-1 mr-2" src="/images/reviews/g_logo.png" />
                    <p className="text-sm">
                        a year ago
                    </p>
                </div>
            </div>
            </SplideSlide>
            <SplideSlide>
            <div className="border-1 p-4 border border-gray-300 rounded relative"  style={{height:'475px'}}>
                <img className="w-full h-24 w-24 mx-auto" src="/images/reviews/mandaMmfp.png" />
                <p className="text-black text-lg font-bold text-center mt-1">Manda Mmfp</p>
                <p className="text-center text-sm mb-1.5 -mt-1">Local Guide</p>
                <img className="w-28 mx-auto mb-1" src="/images/reviews/fiveStars.png" />
                <p className="text-center text-sm pb-12">Great little local shop. We went in for fish and their knowledge is great and they are very responsible sellers, they wouldn't sell me any fish that were too big for our tank or too many, asking us to just take a few then come back in... <a className="text-blue-500 font-bold" href="https://www.google.com/maps/contrib/116071389640600600723/place/ChIJiZpNlfBye0gR9L04dnQLgCg/@52.3281658,-2.3024479,7z/data=!4m4!1m3!8m2!1e1!2s116071389640600600723?hl=en-GB">More</a></p> 
                <div className="flex justify-center absolute mt-6 bottom-4" style={{'left':'50%', 'transform': 'translateX(-50%)', 'width':'100%'}}> 
                    <img className="w-4 h-4 mt-1 mr-2" src="/images/reviews/g_logo.png" />
                    <p className="text-sm">
                        8 months ago
                    </p>
                </div>
            </div>
            </SplideSlide>
            <SplideSlide>
            <div className="border-1 p-4 border border-gray-300 rounded relative"  style={{height:'475px'}}>
                <img className="w-full h-24 w-24 mx-auto" src="/images/reviews/samDouglas.png" />
                <p className="text-black text-lg font-bold text-center mt-1">Sam Douglas</p>
                <p className="text-center text-sm mb-1.5 -mt-1">3 reviews</p>
                <img className="w-28 mx-auto mb-1" src="/images/reviews/fiveStars.png" />
                <p className="text-center text-sm pb-12">Good choice of fish at generally low prices.</p> 
                <div className="flex justify-center absolute mt-6 bottom-4" style={{'left':'50%', 'transform': 'translateX(-50%)', 'width':'100%'}}> 
                    <img className="w-4 h-4 mt-1 mr-2" src="/images/reviews/g_logo.png" />
                    <p className="text-sm">
                        8 months ago
                    </p>
                </div>
            </div>
            </SplideSlide>
        </Splide>
            <div className="ml-10 p-4 relative hidden sm:block">
                <div style={{'marginTop':'auto', 'marginBottom':'auto'}}>
                    <div className="mx-auto">
                        <p className="text-left text-xs">Rated</p> 
                        <p className="text-left text-md sm:text-xl mt-auto tracking-widest">EXCELLENT</p> 
                    </div>
                    <img className="w-20 mx-auto mb-1" src="/images/reviews/google-reviews-image.png" />
                    <p className="text-center text-sm underline"><a href="https://www.google.com/search?q=happy+pets+preston&rlz=1C5CHFA_enGB954GB954&oq=happy+pets+preston&aqs=chrome..69i57j46i175i199i512j69i59l2j69i61j69i60.1752j0j7&sourceid=chrome&ie=UTF-8#lrd=0x487b72f0954d9a89:0x28800b747638bdf4,1,,,">See all 192 Reviews</a></p> 
                </div>
            </div>

            </div>
    </Section>
);

export { Reviews };