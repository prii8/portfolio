import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const maxTechCountMobile = 8;
  const isMobile = window.innerWidth <= 768;
  const displayedTechnologies = isMobile
    ? technologies.slice(0, maxTechCountMobile)
    : technologies;

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {displayedTechnologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");