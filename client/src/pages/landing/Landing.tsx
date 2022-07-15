import React from "react"
import Loader from "../../components/Loader"
import useFetch from "../../hooks/useFetch"
import ErrorMsg from "../../components/ErrorMsg"
import Forecast from "./components/Forecast"

export default function Home() {
  
  const { data, error, loading } = useFetch("/weather/all")

  if (error) return <ErrorMsg/>
  if (loading) return <Loader/>

  return (
    <div className="flex justify-end">
      <div className="w-full min-h-screen p-4 text-white bg-zinc-900 md:w-[90%] lg:w-3/4 xl:w-3/5 bg-opacity-90">
        <h1 className="font-bold text-center md:text-2xl">
          Stockholm Royal Palace <span className="font-light">Weather</span>
        </h1>
        <div className="md:px-8 md:py-4">
        {data && <Forecast data={data}/>}
        </div>
      </div>
    </div>
  )
}
