window.addEventListener('load', () => {

    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#606bd3",
        "#60c2d3"
      ];
    

    //Sound
    pads.forEach((pad, index) => {
        pad.addEventListener("click", function() {
          sounds[index].currentTime = 0;
          sounds[index].play();
      createBubbles(index);
        });
      });
      // function that makes bubbles
      const createBubbles = (index) => {
          const bubble = document.createElement("div");
          visual.appendChild(bubble); //attaching the bubbles to visual div
          bubble.style.backgroundColor = colors[index];
      }
    });
