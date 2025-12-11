import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import CategoryTabs from "@/components/landing/CategoryTabs";
import FeaturedStores from "@/components/landing/FeaturedStores";
import HowItWorks from "@/components/landing/HowItWorks";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CategoryTabs />
        <FeaturedStores />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
