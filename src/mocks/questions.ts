import { type Question } from '@/types/question'

const QUESTIONS: Question[] = [
  {
    id: '1',
    quizId: '1',
    question: 'console.log(typeof null);',
    answers: [
      { answer: 'null', id: '1', index: 'A' },
      { answer: 'undefined', id: '2', index: 'B' },
      { answer: 'object', id: '3', index: 'C' },
      { answer: 'number', id: '4', index: 'D' }
    ],
    correctAnswerIndex: 'C'
  },
  {
    id: '2',
    quizId: '1',
    question: `var x = 10;
    function foo() {
      console.log(x);
      var x = 20;
    }
    foo();`,
    answers: [
      { answer: '10', id: '5', index: 'A' },
      { answer: '20', id: '6', index: 'B' },
      { answer: 'undefined', id: '7', index: 'C' },
      { answer: 'ReferenceError', id: '8', index: 'D' }
    ],
    correctAnswerIndex: 'C'
  },
  {
    id: '3',
    quizId: '1',
    question: `var person = {
      name: "John",
      age: 30,
      greet: function() {
        console.log("Hello, " + this.name + "!");
      }
    };
    person.greet();`,
    answers: [
      { answer: 'Hello, undefined!', id: '9', index: 'A' },
      { answer: 'Hello, John!', id: '10', index: 'B' },
      { answer: 'TypeError', id: '11', index: 'C' },
      { answer: 'ReferenceError', id: '12', index: 'D' }
    ],
    correctAnswerIndex: 'B'
  }
]

export default QUESTIONS
