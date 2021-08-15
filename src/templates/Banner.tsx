import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Free Expert Advice"
      subtitle=""
      button={
        <Link href="tel:+44-1772-886400">
          <a>
            <Button>Call Us</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
