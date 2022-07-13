import React from "react";
import useFetch from "../hooks/useFetch";
import TabGroup from "../components/tabs/TabGroup";

export default function Home() {
  const { data, error, loading } = useFetch("/weather/all");

  if (error) return <p>Error</p>;
  if (loading) return <p>Loading</p>;

  if (data) {
    console.log(data);
  }

  return (
    <div className="flex justify-end">
      <div className="w-full min-h-screen p-4 text-white bg-zinc-900 md:w-3/4 bg-opacity-90">
        <h1 className="font-bold text-center md:text-2xl">
          Stockholm Royal Palace <span className="font-light">Weather</span>
        </h1>
        {data && <TabGroup data={data}></TabGroup>}
      </div>
    </div>
  );
}
