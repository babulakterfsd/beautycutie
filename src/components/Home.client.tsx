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
    </section>
  );
};

export default Home;
