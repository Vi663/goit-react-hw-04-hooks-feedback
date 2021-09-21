import { useState, useEffect } from 'react';
import { FeedbackOptions  } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { MainContainer } from '../MainContainer/MainContainer'
import { Section } from '../Section/Section';
import { Notification } from '../Notification/Notification';

export function App() {
  const [total, setTotal] = useState(0)
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 })
  const { good, neutral, bad } = state

  const countPositiveFeedbackPercentage = () => {
    return Math.round(good * 100 / total);
  }

  useEffect(() => {
    setTotal(good + neutral + bad)
  }, [good, neutral, bad]);

  const handleClick = (option) => {
    setState((prevState) => ({ ...prevState, [option]: prevState[option] + 1 }))
    
  };

  return (
    <MainContainer>
      <Section title='Please leave feedback'>
        <FeedbackOptions
          options={state}
          onHandleClick={handleClick} />
      </Section>
        
      {total ? (
        <Section title='Statistics'>
          <Statistics
            statistics={state}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      )
        : <Notification message="No feedback given" />}
    </MainContainer>
  );
}