
import {
  GROUP1, GROUP2, GROUP3, GROUP4,
  GROUP5, GROUP6, GROUP7, GROUP8,
  GROUP9, GROUP10, GROUP11, GROUP12,
  GROUP13, GROUP14, GROUP15, GROUP16
} from "../data/teams";

export default function Home() {

  const GROUPS = [
    GROUP1, GROUP2, GROUP3, GROUP4,
    GROUP5, GROUP6, GROUP7, GROUP8,
    GROUP9, GROUP10, GROUP11, GROUP12,
    GROUP13, GROUP14, GROUP15, GROUP16
  ];

  return (
    <div className="Main">

      <img className="BGIMG" src="/bg.png" />

      <div className="MainContent">

        <h3 className="Heading">SCORE BOARD</h3>

        {GROUPS.map((group, index) => (

          <div className="ScoreBoard" key={index}>

            <h2 className="GroupHeading">
              Group {index + 1}
            </h2>

            {group.map((team) => (

              <div key={team.id} className="Team">

                <img
                  className="TeamLogo"
                  src={team.teamLogo}
                  alt={team.teamName}
                />

                <div className="TeamDetails">

                  <h3 className="TeamName">
                    {team.teamName}
                  </h3>

                  <div className="TeamScoreCont">

                    <p className="TeamScore">
                      Win: {team.win}|
                    </p>

                    <p className="TeamScore">
                      Loss: {team.loss}|
                    </p>

                    <p className="TeamScore">
                      Draw: {team.draw}|
                    </p>

                    <p className="TeamScore">
                      GD: {team.goalDifference}
                    </p>

                  </div>

                  <h2 className="TeamPts">
                    PTS: {team.teamPTS}
                  </h2>

                </div>

              </div>

            ))}

          </div>

        ))}

      </div>
    </div>
  );
}
