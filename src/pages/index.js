import React from 'react';

import {
  HeroPage,
  Services,
  SocialProof,
  Features,
  Team,
  Steps,
} from '../components/';

const Home = () => {
  // const observer = new IntersectionObserver((entries) => {
  //   entries.forEach((e) => {
  //     if (e.isIntersecting) {
  //       e.target.classList.add('Show');
  //     } else {
  //       e.target.classList.add('');
  //     }
  //   });
  // });

  return (
    <section className="">
      <div className="description">
        <span className="hidden w-56">
          <em>
            <b>Gogixer</b>
          </em>
          -An online learning platform for web developers and entrepreneurs to
          learn web development skills.
        </span>
      </div>
      <div className="">
        <HeroPage />
        <Services />
        <Features />
        <Steps />
        <SocialProof />
      </div>
    </section>
  );
};

export default Home;
