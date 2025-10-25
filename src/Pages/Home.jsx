import { GiPlantSeed } from 'react-icons/gi';
import { useLoaderData } from 'react-router';
import IndoorPlant from '../Components/HomeComponents/IndoorPlant';
import ExpartTeam from '../Components/HomeComponents/ExpartTeam';
import PlantCareTips from '../Components/HomeComponents/PlantCareTips';
import { useEffect, useState } from 'react';
import EcoDecorIdea from '../Components/HomeComponents/EcoDecorIdea';
import HeroSection from '../Components/HeroSection';
import PlantOfTheWeek from '../Components/HomeComponents/PlantOfTheWeek';

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
    <div className="bg-gradient-to-r from-green-200 via-gray-300 to-purple-300 text-gray-700">
      {/* HERO SECTION */}
      <HeroSection></HeroSection>

      {/* TOP RATED INDOOR PLANTS */}
      <section className="py-16 px-4 md:px-12">
        <h2 className="text-3xl font-semibold flex items-center justify-center text-green-700 mb-10">
          <GiPlantSeed className="inline mr-2 text-purple-600 text-4xl" /> Top
          Rated Indoor Plants
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {topRated.map((plant) => (
            <IndoorPlant plant={plant} key={plant.plantId}></IndoorPlant>
          ))}
        </div>
      </section>

      {/* Plant of the Week */}
      <PlantOfTheWeek />

      {/* PLANT CARE TIPS */}
      <PlantCareTips tips={tips} key={tips.id}></PlantCareTips>

      {/* MEET OUR GREEN EXPERTS */}
      <ExpartTeam exparts={experts} key={experts.id}></ExpartTeam>

      {/* EXTRA SECTION: ECO DECOR IDEAS */}
      <EcoDecorIdea decorIdeas={decorIdeas} key={decorIdeas.id}></EcoDecorIdea>
    </div>
  );
};

export default Home;
