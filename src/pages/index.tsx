import { Reviews } from '../layout/GoogleReviews';
import { OpeningTimes } from '../templates/OpeningTimes';
import { Map } from '../layout/Map';
import { Meta } from '../layout/Meta';
import { Banner } from '../templates/Banner';
import { Footer } from '../templates/Footer';
import { Hero } from '../templates/Hero';
import { VerticalFeatures } from '../templates/VerticalFeatures';
import { AppConfig } from '../utils/AppConfig';

const Index = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <Reviews />
    <VerticalFeatures />
    <OpeningTimes />
    <Map />
    <Banner />
    <Footer />
  </div>
);

export default Index;
