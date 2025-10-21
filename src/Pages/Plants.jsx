import { useLoaderData } from 'react-router';

const Plants = () => {
  const plants = useLoaderData();
  console.log(plants);
  return (
    <div>
      <h2>Plants here....</h2>
      {plants.map((plant) => console.log(plant))}
    </div>
  );
};

export default Plants;
