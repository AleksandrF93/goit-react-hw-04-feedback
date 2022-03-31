import { useEffect, useState } from 'react';
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section'
import Notification from 'components/Notifications';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [totalFeedbacks, setTotalFeedbacks] = useState(0);
  const [positivePercentage, setPositivePercentage] = useState(0);

  useEffect(() => {
    setTotalFeedbacks(good + neutral + bad);
    setPositivePercentage(Math.round((good * 100) / totalFeedbacks))
  }, [good, neutral, bad, totalFeedbacks]);

  const onLeaveFeedback = e => {
     switch (e) {
      case "good":
        setGood((prev) => prev + 1);
        break;
      case "bad":
        setBad((prev) => prev + 1);
        break;
      case "neutral":
        setNeutral((prev) => prev + 1);
        break;
      default:
        break;
    };
  }

  return (
      <Section title="Please leave your feedback">
        <FeedbackOptions
          options={["good", "neutral", "bad"]}
          onLeaveFeedback={onLeaveFeedback}
        />
        {totalFeedbacks ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalFeedbacks={totalFeedbacks}
            positivePercentage={positivePercentage}
          />
        ) : (<Notification message="There is no feedback" />)}
      </Section>
                
    );
}


// class App extends Component {

//     state = {
//         good: 0,
//         neutral: 0,
//         bad: 0
//     };

//   onLeaveFeedback = (e) => {
//     this.setState(prevState => ({
//       [e]: prevState[e] + 1,
//     }));
//   };

  // countTotalFeedbacks = () => {
  //   const values = Object.values(this.state);
  //   return values.reduce((acc, feedback) => acc + feedback, 0);
  // };
    
  // countPositiveFeedbackPercentage = total => {
  //   return ((this.state.good / total) * 100).toFixed();
  // };
    


//   render() {
//             const buttons = Object.keys(this.state);
//             const { good, neutral, bad } = this.state;
//             const totalFeedbacks = this.countTotalFeedbacks();
//             const positivePercentage = this.countPositiveFeedbackPercentage(totalFeedbacks);
//     return (
//       <Section title="Please leave your feedback">
//         <FeedbackOptions
//           options={buttons}
//           onLeaveFeedback={onLeaveFeedback}
//         />
//         {totalFeedbacks ? (
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             totalFeedbacks={totalFeedbacks}
//             positivePercentage={positivePercentage}
//           />
//         ) : (<Notification message="There is no feedback" />)}
//       </Section>
                
//     );
//   }
// };

