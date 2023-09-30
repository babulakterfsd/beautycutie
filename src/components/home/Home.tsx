import NewsletterFull from '../shared/NewsletterFull';
import Banner from './Banner';
import FeatureAndCurious from './FeatureAndCurious';
import Reviews from './Reviews';
import WhyChoosingUs from './WhyChoosingUs';

const Home = () => {
  return (
    <section>
      <Banner />
      <WhyChoosingUs />
      <FeatureAndCurious />
      <Reviews />
      <div className="px-4 md:px-0">
        <NewsletterFull />
      </div>
    </section>
  );
};

export default Home;
