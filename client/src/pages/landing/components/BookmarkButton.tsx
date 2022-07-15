import React from 'react'
import StarIcon from '../../../components/icons/StarIcon';


interface IBookmarkButtonProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    title: string;
    hasBookmark: string | null;
}

export default function BookmarkButton(props: IBookmarkButtonProps) {
  return (
    <button className='flex items-center p-2 text-xs text-white rounded-md w-max fill-white' onClick={props.onClick}>
        <StarIcon filled={props.hasBookmark}/>
        <span className='mx-2'>{props.title}</span></button>
  )
}
