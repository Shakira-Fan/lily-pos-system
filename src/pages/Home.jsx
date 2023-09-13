import Nav from "../components/Nav";
import BookingForm from "../sections/home/BookingForm";
import Experience from "../sections/home/Experience";
import FeatureProduct from "../sections/home/FeatureProduct";
import Footer from "../sections/home/Footer";
import Hero from "../sections/home/Hero";
import PowerFeture from "../sections/home/PowerFeture";
import PricePlan from "../sections/home/PricePlan";
import TechnicalSupport from "../sections/home/TechnicalSupport";

const Home = () => {
  return (
   <main className="relative">
    <Nav/>
    <section className="xl:bg-home bg-no-repeat bg-cover bg-primary-bg">
      <Hero/>
    </section>
    <section>
      <FeatureProduct/>
    </section>
    <section className="padding-b">
      <Experience/>
    </section>
    <section className="bg-primary-bg px-8">
      <PricePlan/>
    </section>
    <section className="border-b border-gray-e9 padding-y">
      <PowerFeture/>
    </section>
    <section>
      <TechnicalSupport/>
    </section>
    <section className="bg-primary-bg">
      <BookingForm/>
    </section>
    <section className="padding-x bg-black padding-t pb-8">
     <Footer/>
    </section>
   </main>
  );
};

export default Home;
