import React from "react"

import {
  HeroPage,
  Services,
  SocialProof,
  Features,
  CategoryFilter,
  Course,
  Team,
  Steps,
} from "../components/"


const Home = () => {
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
  )
}

export default Home
