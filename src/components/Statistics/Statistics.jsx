import React from 'react';
import s from './Statistics.module.css'

export function Statistics({ statistics, total, positivePercentage }) {
  return (
    <ul className={s.StatsList}>
      {Object.entries(statistics).map(([stat, value]) => {
        return statistics.hasOwnProperty(stat) && (
          <li className={s.StatsItem}>{`${stat}: ${value}`}</li>
        )
    })}
    
    <li className={s.StatsResults}>In total: {total}</li>
    <li className={s.StatsResults}>Positive feedback: {positivePercentage} % </li>
  </ul>
  )
}
