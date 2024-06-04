import { useEffect, useState } from "react";

export default function Rules() {
  const [generalRules, setGeneralRules] = useState([]);
  const [competitiveRules, setCompetitiveRules] = useState({});

  useEffect(() => {
    fetch("/data/rules.json")
      .then((response) => response.json())
      .then((data) => {
        setGeneralRules(data.generalRules);
        setCompetitiveRules(data.competitiveRules);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="page-header">Rules</h1>

      <div className="page-section">
        <h2>General Rules</h2>
        <ul>
          {generalRules.map((rule, index) => (
            <li key={index}>{rule}</li>
          ))}
        </ul>
      </div>

      {competitiveRules.title && (
        <div className="page-section">
          <h2>{competitiveRules.title}</h2>
          <p>{competitiveRules.description}</p>
          {competitiveRules.notes &&
            competitiveRules.notes.map((note, index) => (
              <p key={index}>{note}</p>
            ))}

          <div className="page-section">
            <h3>Gameplay</h3>
            <p>{competitiveRules.gameplay.winConditions}</p>

            <h4>Technical</h4>
            <ul>
              {competitiveRules.gameplay.technical.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h4>Desync</h4>
            <p>{competitiveRules.gameplay.desync}</p>

            <h4>Accidental Lobby Reset</h4>
            <p>{competitiveRules.gameplay.lobbyReset}</p>

            <h4>Same Player Matchup Rule</h4>
            <p>{competitiveRules.gameplay.samePlayerMatchup}</p>

            <h4>Queue Rules</h4>
            <p>{competitiveRules.gameplay.queueRules}</p>

            <h4>Loadout Rules</h4>
            <ul>
              {competitiveRules.gameplay.loadoutRules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
