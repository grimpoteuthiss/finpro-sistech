// pages/index.tsx

import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero/Hero";
import { HeroImage } from "../components/Hero/HeroImage";
import { Footer } from "../components/Footer/Footer";
import { Feedback } from "../components/Feedback/Feedback";
import { FeedbackCardListContainer } from "../components/Feedback/FeedbackCardListContainer";
import { NavigationButton } from "../components/NavigationButton/NavigationButton";
import { SpecialOffers } from "../components/SpecialOffers/SpecialOffers";
import { CoursesList } from "../components/CoursesList/CoursesList";
import { QuizPage } from "../components/QuizPage/QuizPage";

export default function Pages() {
  return (
    <>
      <Navbar />
      {/* <div className="pt-16"> */}
        <HeroImage />
        <Hero />
        <SpecialOffers />
        <CoursesList />
        <Feedback />
        {/* <QuizPage /> */}
        <Footer />
      {/* </div> */}
    </>
  );
}
