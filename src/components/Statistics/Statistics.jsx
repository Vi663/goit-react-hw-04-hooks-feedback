import React from 'react';
import s from './Statistics.module.css'

export function Statistics({ statistics, total, positivePercentage }) {
  return (
    <ul className={s.StatsList}>
      {statistics.map(([stat, value]) => {
        return (
          <li className={s.StatsItem}>{`${stat}: ${value}`}</li>
        )
    })}
    
    <li className={s.StatsResults}>In total: {total}</li>
    <li className={s.StatsResults}>Positive feedback: {positivePercentage} % </li>
  </ul>
  )
}
