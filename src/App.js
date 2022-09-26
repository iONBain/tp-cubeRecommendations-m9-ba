import React, { useState } from "react";
import "./styles.css";

export default function App() {
  // var userName = "Bhaskar Agrawal";
  const cubeList = {
    Beginner: [
      {
        name: "2x2",
        description:
          "This cube is the smallest of all cubes, easier and quickly solvable if you can solve a 3x3",
        url:
          "https://github.com/iONBain/tp-cube-recommendation-ba/blob/main/cubesImg/beginner/2x2.jpg?raw=true"
      },
      {
        name: "3x3",
        description:
          "This cube is the base cube for all cubers. Most of the cubes available in the market follow a similar algorithm to be solved. ",
        url:
          "https://github.com/iONBain/tp-cube-recommendation-ba/blob/main/cubesImg/beginner/3x3.jpg?raw=true"
      },
      {
        name: "Gear Cube",
        description:
          "This cube is one of my favourites. The way this puzzle turns will amaze you. ",
        url:
          "https://github.com/iONBain/tp-cube-recommendation-ba/blob/main/cubesImg/beginner/gearcube.jpg?raw=true"
      },
      {
        name: "Skewb Cube",
        description:
          "This cube is somewhat similar to a 2x2 cube. Easy to solve, can be solved by instincts ",
        url:
          "https://github.com/iONBain/tp-cube-recommendation-ba/blob/main/cubesImg/beginner/skweb.jpg?raw=true"
      }
    ],
    Intermediate: [
      {
        name: "4x4",
        description:
          "This cube is also known as Rubik's Revenge cube. Little bit modification is there from 3x3 algorithms.",
        url:
          "https://github.com/iONBain/tp-cube-recommendation-ba/blob/main/cubesImg/inter/4x4.jpg?raw=true"
      },
      {
        name: "5x5",
        description:
          "This cube is known as Professor's Cube. Honestly, I haven't tried solving it, but seems a little tough to solve.",
        url:
          "https://github.com/iONBain/tp-cube-recommendation-ba/blob/main/cubesImg/inter/5x5.jpg?raw=true"
      },
      {
        name: "Axis Cube",
        description:
          "This cube is very special cube. Turns awkwardly, but is a shape mod of the famous 3x3 cube. ",
        url:
          "https://github.com/iONBain/tp-cube-recommendation-ba/blob/main/cubesImg/inter/axiscube.jpg?raw=true"
      },
      {
        name: "Mirror Cube",
        description:
          "This cube was used in the movie Bang Bang [Hritik Roshan]. Believe me, there is no diamond inside this cube 😂",
        url:
          "https://github.com/iONBain/tp-cube-recommendation-ba/blob/main/cubesImg/inter/mirror.jpg?raw=true"
      }
    ],
    Advanced: [
      {
        name: "Ghost Cube",
        description:
          "This cube was my dream cube. Back in 2012, it wasn't available in India. This cube has each and every piece with a unique shape and size. ",
        url:
          "https://github.com/iONBain/tp-cube-recommendation-ba/blob/main/cubesImg/adv/ghost.jpg?raw=true"
      },
      {
        name: "Megaminx",
        description:
          "This cube is just a giant looking cube. A little bit tricky and time consuming puzzle. ",
        url:
          "https://github.com/iONBain/tp-cube-recommendation-ba/blob/main/cubesImg/adv/megaminx.jpg?raw=true"
      },
      {
        name: "Square-1",
        description:
          "This cube is very one of a kind cube. Next to impossible to solve if the algorithm is not known. One of the hardest cube you can have in your collection.",
        url:
          "https://github.com/iONBain/tp-cube-recommendation-ba/blob/main/cubesImg/adv/square1.jpg?raw=true"
      },
      {
        name: "Puppet Cube",
        description:
          "This cube once scrambled cannot be solved to a cube again. No youtube tutorial that would help us solve the cube! ",
        url:
          "https://github.com/iONBain/tp-cube-recommendation-ba/blob/main/cubesImg/adv/puppet.jpg?raw=true"
      }
    ],
    Miscellaneous: [
      {
        name: "Spinner",
        description:
          "This cube is nothing but a fidget spinner. Have it with you, a great deal of 2-in-1 combo. Solve it, spin it, your choice. ",
        url:
          "https://github.com/iONBain/tp-cube-recommendation-ba/blob/main/cubesImg/misc/spinner.jpg?raw=true"
      },
      {
        name: "Twisty Cube",
        description:
          "This cube justifies it's name. It's like someone heated the cube, twisted it, and ta-daa, a new cube is born. ",
        url:
          "https://github.com/iONBain/tp-cube-recommendation-ba/blob/main/cubesImg/misc/twisty.jpg?raw=true"
      },
      {
        name: "Windmill Cube",
        description:
          "This cube also justifies it's name. Turn it in a specific fashion, and you will have a mini windmill of your own! ",
        url:
          "https://github.com/iONBain/tp-cube-recommendation-ba/blob/main/cubesImg/misc/windmill.jpg?raw=true"
      },
      {
        name: "2x2x3",
        description:
          "This cube, as it can be seen is a cuboid. One of the many weird cubes you can choose to solve. ",
        url:
          "https://github.com/iONBain/tp-cube-recommendation-ba/blob/main/cubesImg/misc/2x2x3.jpg?raw=true"
      }
    ]
  };
  var btns = Object.keys(cubeList);
  const [level, setLevel] = useState("Beginner");

  function levelSelectHandler(lvl) {
    // console.log(lvl);
    // var tempLvl = cubeList[lvl];
    setLevel(lvl);
  }
  return (
    <body className="bodyStyle" style={{ margin: "auto", padding: "1rem" }}>
      <div className="background-element"></div>
      <div className="App">
        <h1 style={{ FontFace: "roboto" }}>Rubik's Cube Collection</h1>
        <p>Click on below categorical levels to see the recommendations :- </p>
        {btns.map((level) => {
          return (
            <button
              className="btns"
              onClick={() => levelSelectHandler(level)}
              key={level}
            >
              {" "}
              {level}{" "}
            </button>
          );
        })}
        <ul className="list">
          {cubeList[level]?.map((cube) => (
            <li key={cube.name} className="listItem">
              <h3> {cube.name}</h3>
              <img
                src={cube.url}
                alt="rubiks cube here"
                style={{
                  height: "100px",
                  width: "100px",
                  borderRadius: "50px"
                }}
              ></img>
              <p className="desc">{cube.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </body>
  );
}
