import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Chris Whiting <br />
        Portfolio
      </SectionTitle>
      <SectionText>
        I am a full stack Javascript developer.
      </SectionText>
      <Button
        onclick={() =>
          (window.location = 'https://google.com')
        }
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
