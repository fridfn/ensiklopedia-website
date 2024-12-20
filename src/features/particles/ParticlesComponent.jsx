import Particles from "react-tsparticles";
import dinosaurus from "./dinosaurus.png";
import { loadFull } from "tsparticles";

const ParticlesComponent = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        particles: {
          number: { value: 7 },
          color: { value: "#00ee29" },
          shape: {
            type: "char",
            image: { src: dinosaurus, width: 500, height: 500 },
            character: {
              value: ["🍀"],
              font: "FontAwesome",
            },
          },
          size: {
           value: 20,
           random: true,
           anim: {
            speed: 5,
            enable: false,
            size_min: 10,
           },
          },
          opacity: {
           value: 1,
           random: false,
           anim: {
             enable: false,
             speed: 1,
             opacity_min: 1,
             sync: false
           }
          },
          move: {
           enable: true,
           speed: 2,
           direction: 'bottom',
           out_mode: 'out'
         }
        },
      }}
    />
  );
};

export default ParticlesComponent;
