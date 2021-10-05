import React, { useState } from "react";
import "./styles.css";

const movieDB = {
  Thriller: [
    {
      name: "Olympus has fallen",
      rating: "6.5/10",
      des:
        "When the President is kidnapped, a former secret service agent must use his expertise to rescue him as well as the other hostages"
    },
    {
      name: "Harry Potter series",
      rating: "7.5/10",
      des:
        "The movie chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry."
    },
    {
      name: "Looper",
      rating: "7.4/10",
      des:
        "In the near future, the mob sends their victims back in time to get them executed by the loopers. Joe, one such looper, finds himself to be the victim of his own actions."
    },
    {
      name: "The Accountant",
      rating: "7.3/10",
      des:
        "Accountant Christian Wolff works for various illegal companies and manipulates their financial records. When the FBI learns about his truth, he takes up a legitimate client to bluff the officers."
    }
  ],

  Horror: [
    {
      name: "The Conjuring",
      rating: "7.3/10",
      des:
        "The Perron family moves into a farmhouse where they experience paranormal phenomena. They consult demonologists, Ed and Lorraine Warren, to help them get rid of the evil entity haunting them."
    },
    {
      name: "Annabella Creation",
      rating: "6.5/10",
      des:
        "Samuel and Elle embed their daughter's spirit into a doll, only to realise it is a demon. Years later, they open their home to a nun and six orphan girls, one of whom finds the doll."
    },
    {
      name: "IT",
      rating: "7.3/10",
      des:
        "Seven helpless and bullied children are forced to face their worst nightmares when Pennywise, a shape-shifting clown, reappears. The clown, an ancient evil torments children before feeding on them."
    },
    {
      name: "Pay the ghost",
      rating: "5.4/10",
      des:
        "Mike Cole's life is torn apart when his son is abducted during a Halloween parade. Desperate to bring him home again, Mike must risk everything to unravel a terrifying supernatural mystery."
    }
  ],
  Comedy: [
    {
      name: "Catch me if you can",
      rating: "8.1/10",
      des:
        "Notorious con artist Frank Abagnale has duped people worth millions of dollars with his masterful art of deception. With his scams getting bolder, he is soon pursued by FBI agent Carl Hanratty."
    },
    {
      name: "Forest Grump",
      rating: "8.8/10",
      des:
        "Forrest, a man with low IQ, recounts the early years of his life when he found himself in the middle of key historical events. All he wants now is to be reunited with his childhood sweetheart, Jenny."
    },
    {
      name: "Tropic Thunder",
      rating: "7/10",
      des:
        "A film crew shooting a big-budget war movie are forced to become the soldiers they are portraying, when they are attacked by a gang of poppy-growing local drug dealer, due to mistaken identities."
    },
    {
      name: "Despicable Me",
      rating: "7.3/10",
      des:
        "The film tells the story of a supervillain named Gru, who adopts a trio of orphan girls named Margo, Edith, and Agnes and attempts to steal a shrink ray from his rival Vector in order to shrink and steal the moon."
    }
  ],
  ScienceFiction: [
    {
      name: "Start Trek:Into the Darkness",
      rating: "7.5/10",
      des:
        "The USS Enterprise crew travels to the forbidden zone in space to rescue an endangered species. Captain Kirk then leads his team to a war-zone world in search of a weapon of mass destruction."
    },
    {
      name: "The Tomorrow war",
      rating: "6.6/10",
      des:
        "The world is stunned when a group of time travellers arrive from the year 2051 to deliver an urgent message: thirty years in the future, mankind is losing a global war against a deadly alien species."
    },
    {
      name: "Interstellar",
      rating: "8.6/10",
      des:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans."
    },
    {
      name: "Gravity",
      rating: "7.7/10",
      des:
        "On an outer space mission, Dr Ryan Stone, an engineer, and Matt Kowalski, an astronaut, are hit by high-speed space debris. As the situation gets dire, Stone, the lone survivor, rises to the occasion."
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Thriller");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="container">
      <h1 className="header"> 🎥 greatmovie.com </h1>
      <p className="para">
        {" "}
        Checkout my movie recommendation. Select a genre to get started.{" "}
      </p>

      <div className="btn-div">
        {Object.keys(movieDB).map((genre) => (
          <button onClick={() => genreClickHandler(genre)} className="btn">
            {genre}
          </button>
        ))}
      </div>

      <div className="last-div">
        <ul>
          {movieDB[selectedGenre].map((movie) => (
            <li key={movie.name} className="list-item">
              <div className="last-div-large"> {movie.name} </div>
              <div className="last-div-small"> {movie.rating} </div>
              <div className="last-div-small"> {movie.des} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
