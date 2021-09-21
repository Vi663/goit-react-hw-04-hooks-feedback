import React from 'react';
import s from './FeedbackOptions.module.css'

export function FeedbackOptions ({options, onHandleClick}) {
  return (
    <ul className={s.ButtonList}>
      {Object.keys(options).map((option) => (
        <li className={s.ButtonItem} key={option}>
          <button
            className={s.button}
            id={option}
            onClick={() => onHandleClick(option)}
          >{option}</button>
        </li>
      ))}
    </ul>
  )
}