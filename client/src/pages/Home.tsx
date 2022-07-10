import React from "react";
import useFetch from "../hooks/useFetch";
// import ITimeInterval from "../interfaces/ITimeInterval";
// import TimeInterval from "../components/TimeInterval";

export default function Home() {
  const { data, error, loading } = useFetch("/weather/all");

  if (error) return <p>Error</p>;
  if (loading) return <p>Loading</p>;
  if (data) {console.log(data)}

    return (
      <div>
        Home
      </div>
    );
}
