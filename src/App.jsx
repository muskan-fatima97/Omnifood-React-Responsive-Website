import './App.css'
import CommentSection from './component/ComentSection'
import FeatureSection from './component/FeatureSection'
import Footer from './component/Footer'
import Franchises from './component/Franchises'
import Hero from './component/Hero'
import HowItWorks from './component/HowItWorks'
import MealPlansSection from './component/MealPlansSection'
import MenuFoodDisplay from './component/MenuFoodDisplay'
import Navbar from './component/Navbar'
import ReviewsSection from './component/ReviewsSection'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <FeatureSection/>
      <MenuFoodDisplay/>
      <HowItWorks/>
      <Franchises/>
      <ReviewsSection/>
      <MealPlansSection/>
      <CommentSection/>
      <Footer/>
    </>
  )
}

export default App
