import React from 'react'

interface ITimeIntervalProps {
    validTime: string;
  }
  

export default function TimeInterval(props: ITimeIntervalProps) {
  return (
    <div className='flex p-8 m-1 border-black border'>
        <p>{props.validTime}</p>
    </div>
  )
}
