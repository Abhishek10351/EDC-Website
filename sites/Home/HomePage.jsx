import Navbar from '../../components/global/Navbar/Navbar';
import Hero from '../../components/home/Hero/Hero';
import Welcome from '../../components/home/Welcome/Welcome';
import Carousel from '../../components/home/Carousel/Carousel';

import "./Homepage.css";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Welcome />
      <Carousel />
    </div>
  );
}