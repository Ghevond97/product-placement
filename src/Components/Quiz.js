import React, { Component } from 'react';
import axios from 'axios';

import styles from '../Components/Quiz.css';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizData: null,
      testAnswer0: null,
      testAnswer1: null,
      testAnswer2: null,
      testAnswer3: null,

      isGoing: true,
      numberOfGuests: 2,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    axios
      .get('http://0.0.0.0:8080/bridge/quiz?id=1', {
   
      })
      .then(response => {
        const data = response.data;
        console.log(data);
        this.setState({ quizData: data });
      })
      .catch(function(error) {
        console.log('error', error);
      });
  }

  handleChange = (e, questionIndex, answerIndex) => {
    const checked = e.target.checked;
    const newQuizData = this.state.quizData;
    newQuizData.questions[questionIndex].answers[
      answerIndex
    ].selected = checked;
    newQuizData.questions[questionIndex].answers.forEach((answer, i) => {
      if (i !== answerIndex) {
        answer.selected = !e.target.checked;
      }
    });

    this.setState({ quizData: newQuizData });
    // newQuizData.questions[questionIndex].answers.forEach(element => {
    //     element[answerIndex] =
    // });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state.quizData);
    axios
      .post('http://0.0.0.0:8080/bridge/quiz/submit', this.state.quizData, {
        headers: {
          'Content-Type': 'application/json'
        },
      })
      .then(function(response) {
        console.log('response', response);
      })
      .catch(function(error) {
        console.log('error', error);
      });
  };

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }
  render() {
    const { quizData } = this.state;
    if (quizData) {
      return (
        <div className="quiz-container">
          <h1 className="quiz-title">{quizData.name}</h1>
          <div>
            <form onSubmit={this.onSubmit}>
              {quizData.questions.map((question, questionIndex) => {
                return (
                  <div className="quiz-question">
                    <h4 className="quiz-quiestion-content">
                      {question.content}
                    </h4>
                    <fieldset
                      id={question.content}
                      className="quiz-question-answer"
                    >
                      {question.answers.map((answer, answerIndex) => {
                        // console.log('hello',this.state.quizData.questions[i].answers[j].selected)
                        // console.log(answer.selected)
                        return (
                          // <fieldset id={i}>
                          <label className="answer-option">
                            <input
                              type="checkbox"
                              name={answer.id}
                              value={answer.content}
                              checked={
                                this.state.quizData.questions[questionIndex]
                                  .answers[answerIndex].selected
                              }
                              onChange={e =>
                                this.handleChange(e, questionIndex, answerIndex)
                              }
                            />
                            <div className="answer-content">
                              {answer.content}
                            </div>
                          </label>
                          // </fieldset>
                        );
                      })}
                    </fieldset>
                  </div>
                );
              })}
              <button type="submit">submit</button>
            </form>
            {/* <button onClick={this.handleSubmit}>SUBMIT</button> */}

            {/* <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
            <button>send</button>
      </form> */}
          </div>
        </div>
      );
    }
    return '';
  }
}

export default Quiz;
