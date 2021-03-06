import { Component } from 'react';
import './App.css';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = key => {
    this.setState(prevFeedback => ({
      ...prevFeedback,
      ...{ [key.target.textContent]: prevFeedback[key.target.textContent] + 1 },
    }));
  };

  countTotalFeedback = () => {
    const count = Object.values(this.state);

    const totalFeedback = count.reduce((total, el) => total + el, 0);

    return totalFeedback;
  };

  countPositiveFeedbackPercentage = totalFeedback => {
    return totalFeedback === 0
      ? 0
      : Math.round((this.state.good * 100) / totalFeedback);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const {
      onLeaveFeedback,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={onLeaveFeedback}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {countTotalFeedback() === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage(
                countTotalFeedback(),
              )}
            ></Statistics>
          )}
        </Section>
      </>
    );
  }
}

export default App;
