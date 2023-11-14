import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

function Particle() {

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // await console.log(container);
    await container;
  }, []);

  return (


<Particles id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
          fpsLimit: 60,
          interactivity: {
              events: {
                  onClick: {
                      enable: true,
                      mode: "push",
                  },
                  onHover: {
                      enable: true,
                      mode: "grab",
                  },
                  resize: true,
              },
              modes: {
                  push: {
                      quantity: 2,
                  },
                  grab : {
                    distance: 200,
                    link_linked:{
                      opacity: 0.5,
                    }
                  }
              },
          },
          particles: {
              color: {
                  value: "#38B2AC",
              },
              links: {
                  color: "#38B2AC",
                  distance: 150,
                  enable: true,
                  opacity: 0.6,
                  width: 1,
              },
              move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                      default: "bounce",
                  },
                  random: false,
                  speed: 3,
                  straight: false,
              },
              number: {
                  density: {
                      enable: true,
                      area: 2400,
                  },
                  value: 80,
              },
              opacity: {
                  value: 0.5,
              },
              shape: {
                  type: "circle",
              },
              size: {
                  value: { min: 1, max: 2 },
              },          
          },         
          detectRetina: true,
        }} 
      />
      
  );
}

export default Particle;