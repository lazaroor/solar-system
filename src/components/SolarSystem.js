import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="system">
          {
            planets.map(({ name, image }) => (<PlanetCard
              key={ name }
              planetName={ name }
              planetImage={ image }
            />))
          }
        </div>
      </div>
    );
  }
}

export default SolarSystem;
