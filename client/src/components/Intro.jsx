import { useState } from 'react';
import {
  IntroContainer,
  ValueText,
  BenefitsList,
  BenefitsHeader,
  ListItem,
  ImageContainer ,
  Dropdown,
  LargeScreen,
  Sliding
} from './IntroStyles';

const Intro = () => {
  const [scrollVal,setScroll]=useState(0);
  const [valueScroll,setValueScroll]=useState(0);
  let lastKnownScrollPosition = 0;
  let ticking = false;
  
  document.addEventListener('scroll', function(e) {
    lastKnownScrollPosition = window.scrollY;
  
    if (!ticking) {
      window.requestAnimationFrame(function() {
        doSomething(lastKnownScrollPosition);
        ticking = false;
      });
  
      ticking = true;
    }
  });
  
  function doSomething(scrollPos) {
    // Do something with the scroll position
    setScroll(-scrollPos);
    setValueScroll(-scrollPos*3);
  }

  return (
    <IntroContainer scroll={scrollVal}>

        <ValueText scroll={valueScroll}>
          <div></div>
        <div>If your business is selected, our team of developers will build you a digital tool that <Dropdown>
          <Sliding>
          <p>Benefit 1</p>
          <p>Benefit 2</p>
          <p>Benefit 3</p>
          <p>Benefit 4</p>
          </Sliding>
        </Dropdown><LargeScreen>takes your business to the next level.</LargeScreen></div>
          <div></div>
        </ValueText>

    
        <BenefitsList >
          <BenefitsHeader >BENEFITS</BenefitsHeader> 
          <ListItem >Open-Source Engineers</ListItem> 
          <ListItem >Partner with a Nonprofit</ListItem>
          <ListItem >Custom Tools (Need Image)</ListItem>
          <ListItem >Meet your Needs (Need Image)</ListItem>
          <ListItem >Gain an Advantage (Need Image)</ListItem>
           
        </BenefitsList>
        

   </IntroContainer>

  );
}

// https://medium.com/@matt.readout/adding-css-animations-with-styled-components-6c191c23b6ba
// https://styled-components.com/docs/basics#animations

export default Intro;
