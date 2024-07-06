import CategoriesSection from "../ui/CategoriesSection";
import Header from "../ui/Header";
import TodaysSections from "../ui/TodaysSections";
import BestSellingSection from "../ui/BestSellingSection";
import ProductSection from "../ui/ProductSection";
import FeaturedSection from "../ui/FeaturedSection";
// >>>>>>> 398a0c0184624c13c9897a5a1f1fd1fadbc05ca6

function HomePage() {
  return (
    <div>
      <Header />
      <TodaysSections />
      <CategoriesSection />
      <BestSellingSection />
      <ProductSection />
      <FeaturedSection />
    </div>
  );
}

export default HomePage;
