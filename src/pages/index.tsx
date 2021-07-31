import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from '../templates/Banner';
import { Footer } from '../templates/Footer';
import { Hero } from '../templates/Hero';
import { VerticalFeatures } from '../templates/VerticalFeatures';
import { Map } from '../layout/Map';
import { Reviews } from '../layout/GoogleReviews';

const Index = () => (
  <div className="antialiased text-gray-600">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Hero />
    <Reviews />
    <VerticalFeatures />
    <Map />
    <Banner />
    <Footer />
  </div>
);

export default Index;