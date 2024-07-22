import { Hero } from "../components/Hero/Hero"
import { HeroImage } from "../components/Hero/HeroImage"
import { Footer } from "../components/Footer/Footer"
// import { FeedbackCard } from "../components/Feedback/FeedbackCard"
// import { FeedbackCardListContainer } from "../components/Feedback/FeedbackCardListContainer"
import { Feedback } from "../components/Feedback/Feedback";
import { NavigationButton } from "../components/NavigationButton/NavigationButton";


export default function Pages() {
    return (
        <>
            <HeroImage/>
            <Hero/>
            <Feedback />
            <Footer />
        </>
    )
}