import { useState, useEffect } from 'react';
import { FeedbackOptions  } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { MainContainer } from '../MainContainer/MainContainer'
import { Section } from '../Section/Section';
import { Notification } from '../Notification/Notification';

const options = ['good', 'neutral', 'bad'];
export function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [option, setOption] = useState(0)
  const [total, setTotal] = useState(0)
  const [state, setState] = useState(options)

  const handleIncrement = () => {
    setOption(prevState => prevState + 1)
  }
  const handleGoodIncrement = () => {
    setGood(prevState => prevState + 1)
  }
  const handleNeutralIncrement = () => {
    setNeutral(prevState => prevState + 1)
  }
  const handleBadIncrement = () => {
    setBad(prevState => prevState + 1)
  }

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round(good * 100 / total);
  }

  useEffect(() => {
    setTotal(prevState => prevState + 1)
  }, [option]);

  const handleClick = ({value}) => {
    setState(prevState => ({
      [value]: prevState[value] + 1
    }),
    );
  };

  return (
    <MainContainer>
      <Section title='Please leave feedback'>
        <FeedbackOptions
          options={options}
          onHandleClick={handleClick} />
      </Section>
        
      {total ? (
        <Section title='Statistics'>
          <Statistics
            statistics={state}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        </Section>
      )
        : <Notification message="No feedback given" />}
    </MainContainer>
  );
}

// export class OldApp extends Component {

//   state = {
//   good: 0,
//   neutral: 0,
//   bad: 0
//   }
  
//   countTotalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };
//   countPositiveFeedbackPercentage = () => {
//     return Math.round(this.state.good * 100 /this.countTotalFeedback());
//   }

//   handleClick = option => {
//     this.setState(prevState => ({
//       [option]: prevState[option] + 1
//     }),
//     );
//   };

//   render() {
//     const percentage = this.countPositiveFeedbackPercentage();
//     const total = this.countTotalFeedback();
//     const options = Object.keys(this.state);
//     return (
//       <MainContainer>
//         <Section title='Please leave feedback'>
//           <FeedbackOptions
//             options={options}
//             onHandleClick={this.handleClick}/>
//         </Section>
        
//         {total ? (
//           <Section title='Statistics'>
//           <Statistics
//             statistics={this.state}
//             total={total}
//             positivePercentage={percentage}
//           />
//         </Section>
//         )
//         : <Notification message="No feedback given"/>}
//       </MainContainer>
//     );
//   }
// }
