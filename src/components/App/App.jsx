import { useState } from 'react';
import { FeedbackOptions  } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { MainContainer } from '../MainContainer/MainContainer'
import { Section } from '../Section/Section';
import { Notification } from '../Notification/Notification';

export function App() {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 })

  const totalCounter = () => {
    return Object.values(state).reduce((acc, value) => acc + value, 0)
  }

  const countPositiveFeedbackPercentage = () => {
    return Math.round(state.good * 100 / totalCounter());
  }

  const handleClick = (option) => {
    setState((prevState) => ({ ...prevState, [option]: prevState[option] + 1 }))
    
  };

  const total = totalCounter();
  const statistics = Object.entries(state)
  const options = Object.keys(state)
  const percentge = countPositiveFeedbackPercentage()

  return (
    <MainContainer>
      <Section title='Please leave feedback'>
        <FeedbackOptions
          options={options}
          onHandleClick={handleClick} />
      </Section>
        
      {total && (
        <Section title='Statistics'>
          <Statistics
            statistics={statistics}
            total={total}
            positivePercentage={percentge}
          />
        </Section>
      )}
        {!total && <Notification message="No feedback given" />}
    </MainContainer>
  );
}