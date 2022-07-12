import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';
import { ITimeInterval } from '../interfaces/ITimeInterval';
import TimeInterval from './TimeInterval';

export default function Day() {

  const { date } = useParams();

  const { data, error, loading } = useFetch(`/weather/${date}`)

  if (error) return <p>Error</p>
  if (loading) return <p>Loading</p>

  if (data) {console.log(data)}

  return (
    <div>
      {data && data.dailyTimeIntervals.map((t: ITimeInterval, index: number) => {
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
