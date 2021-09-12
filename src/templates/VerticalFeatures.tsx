import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  
  <Section
    title="Over 10 Years of Experience"
    description="More than 10 years in the industry, our expert knowledge is second to none, with a good track record of resposible and ethical selling"
  >
    <VerticalFeatureRow
      title="Pet Food and Products"
      description="We stock a wide range of pet products, food, treats and accessories. From hamster bedding to chicken feed and everything in between. We specialise in high quality & nutritional dog food."
      image="/images/feature.jpeg"
      imageAlt="Pet products"
    />
    <VerticalFeatureRow
      title="Live Aquatics"
      description="We have the vast selection of healthy freshwater tropical and cold water fish, over 100 species always in stock, too many to list. We regularuary rotate our stock and have new fish in all the time so be sure to visit us regularly."
      image="/images/feature2.jpeg"
      imageAlt="Live Aquatics Preston"
      reverse
    />
    <VerticalFeatureRow
      title="Koi"
      description="Come and see our newly-opened koi section featuring a selection of large and small koi carp at unbeatable prices."
      image="/images/feature3.jpeg"
      imageAlt="Preston Koi Fish"
    />
        <VerticalFeatureRow
      title="Personalised Dog Tag Engraving"
      description="A wide veriety of dog tags to choose from, with high quality professional computer engraving done in-store, while you wait. All at a flat rate of just £2.99 per tag. "
      image="/images/engraving.jpeg"
      imageAlt="Dog Tag Engravng Preston"
      reverse
    />
  </Section>
);

export { VerticalFeatures };
