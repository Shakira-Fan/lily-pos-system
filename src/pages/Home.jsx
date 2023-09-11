import Nav from "../components/Nav";
import FeatureProduct from "../sections/home/FeatureProduct";
import Footer from "../sections/home/Footer";
import Hero from "../sections/home/Hero";

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
    <section className="padding">
      
    </section>
    <section className="padding-x py-10">
      
    </section>
    <section className="padding">
      
    </section>
    <section className="bg-pale-blue padding">
      
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      
    </section>
    <section className="padding-x bg-black padding-t pb-8">
     <Footer/>
    </section>
   </main>
  );
};

export default Home;
