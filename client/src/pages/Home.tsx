import React from "react";
import useFetch from "../hooks/useFetch";
import TabGroup from "../components/TabGroup";

export default function Home() {
  const { data, error, loading } = useFetch("/weather/all");

  if (error) return <p>Error</p>;
  if (loading) return <p>Loading</p>;

if (data) {console.log(data)}

  return (
    <div className="w-full max-w-5xl p-4 my-16 rounded-md bg-blue-50 sm:px-0">
      {data && <TabGroup
      data={data}></TabGroup>}
    </div>
  );
}
