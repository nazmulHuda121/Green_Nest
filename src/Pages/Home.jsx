import { GiPlantSeed } from 'react-icons/gi';
import { useLoaderData } from 'react-router';
import IndoorPlant from '../Components/HomeComponents/IndoorPlant';
import ExpartTeam from '../Components/HomeComponents/ExpartTeam';
import PlantCareTips from '../Components/HomeComponents/PlantCareTips';
import { useEffect, useState } from 'react';
import EcoDecorIdea from '../Components/HomeComponents/EcoDecorIdea';
import HeroSection from '../Components/HeroSection';
import PlantOfTheWeek from '../Components/HomeComponents/PlantOfTheWeek';
import CTA from '../Components/HomeComponents/CTA';

const Home = () => {
  const plants = useLoaderData();
  // console.log(plants);
  const topRated = plants.filter((plant) => plant.rating >= 4.7);

  // For Extra Optional section
  const [extra, setExtra] = useState({});

  useEffect(() => {
    fetch('/Extras.json')
      .then((res) => res.json())
      .then((data) => setExtra(data))
      .catch((err) => console.log('Failed to load extras:', err));
  }, []);

  const { tips = [], experts = [], decorIdeas = [] } = extra;

  return (
    <div className="">
      {/* HERO SECTION */}
      <HeroSection></HeroSection>

      {/* TOP RATED INDOOR PLANTS */}
      <section className="py-12 px-4 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-12 text-center">
          Top Rated Indoor Plants
        </h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {topRated.slice(0, 4).map((plant) => (
            <IndoorPlant plant={plant} key={plant.plantId}></IndoorPlant>
          ))}
        </div>
      </section>

      {/* Plant of the Week */}
      <PlantOfTheWeek />

      {/* PLANT CARE TIPS */}
      <PlantCareTips tips={tips} key={tips.id}></PlantCareTips>

      {/* EXTRA SECTION: ECO DECOR IDEAS */}
      <EcoDecorIdea decorIdeas={decorIdeas} key={decorIdeas.id}></EcoDecorIdea>
      {/* CTA */}
      <CTA></CTA>
    </div>
  );
};

export default Home;
