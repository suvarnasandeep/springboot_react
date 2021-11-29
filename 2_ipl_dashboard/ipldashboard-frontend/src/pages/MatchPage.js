import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MatchDetailsCard from "../components/MatchDetailsCard";

const MatchPage = () => {
  const [match, setMatches] = useState([]);

  const { teamName, year } = useParams();

  useEffect(() => {
    const fetchMatches = async () => {
      const response = await fetch(
        `http://localhost:8080/team/${teamName}/matches?year=${year}`
      );
      const data = await response.json();
      console.log(data);
      setMatches(data);
    };
    fetchMatches();
  }, []);

  return (
    <div>
      <h1>Match page</h1>
      {match.map((match) => (
        <MatchDetailsCard key={match.id} teamName={teamName} match={match} />
      ))}
    </div>
  );
};

export default MatchPage;
