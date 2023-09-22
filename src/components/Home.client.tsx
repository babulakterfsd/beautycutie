import Banner from './Banner';
import FeatureAndCurious from './FeatureAndCurious';
import NewsletterFull from './NewsletterFull';
import Reviews from './Reviews';
import WhyChoosingUs from './WhyChoosingUs';

const Home = () => {
  return (
    <section>
      <Banner />
      <WhyChoosingUs />
      <FeatureAndCurious />
      <Reviews />
      <NewsletterFull />
    </section>
  );
};

export default Home;
