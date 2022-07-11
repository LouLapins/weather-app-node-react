import React from "react"
import useFetch from "../hooks/useFetch"
import { ITimeInterval } from "../interfaces/ITimeInterval"
// import { IData } from "../interfaces/IData"
import TimeInterval from "../components/TimeInterval"

export default function Home() {

  const { data, error, loading } = useFetch("/weather/all")

  if (error) return <p>Error</p>
  if (loading) return <p>Loading</p>

  if (data) {console.log(data.timeIntervals)}




if (data) {
    const filteredByDay = data.timeIntervals.filter((t: ITimeInterval, todayString: string) => {
        return t.date === todayString;
    });
    console.log(filteredByDay)
    }

  return (
    <div>
      {data && data.timeIntervals.map((t: ITimeInterval, index: number) => {
        return (
          <TimeInterval
            key={index}
            date={t.date}
            time={t.time}
            temperature={t.temperatureCelsius}
            precipitation={t.precipitation}
          />
        )
      })}
    </div>
  )
}
