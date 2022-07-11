import React from 'react'
import { useParams } from 'react-router-dom'

export default function Day() {

  const { date } = useParams();

  return (
    <div>
        {date}
    </div>
  )
}
