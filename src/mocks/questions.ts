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
    question:
    `
    var x = 10;
    function foo() {
      console.log(x);
      var x = 20;
    }
    foo();
    `,
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
    question:
    `
    var person = {
      name: "John",
      age: 30,
      greet: function() {
        console.log("Hello, " + this.name + "!");
      }
    };
    person.greet();
    `,
    answers: [
      { answer: 'Hello, undefined!', id: '9', index: 'A' },
      { answer: 'Hello, John!', id: '10', index: 'B' },
      { answer: 'TypeError', id: '11', index: 'C' },
      { answer: 'ReferenceError', id: '12', index: 'D' }
    ],
    correctAnswerIndex: 'B'
  },
  {
    id: '4',
    quizId: '1',
    question:
    `
    var arr = [1, 2, 3];
    arr[10] = 10;
    console.log(arr.length);
    `,
    answers: [
      { answer: '3', id: '13', index: 'A' },
      { answer: '10', id: '14', index: 'B' },
      { answer: '11', id: '15', index: 'C' },
      { answer: 'undefined', id: '16', index: 'D' }
    ],
    correctAnswerIndex: 'C'
  },
  {
    id: '5',
    quizId: '1',
    question:
    `
    function multiply(x, y = 1) {
      return x * y;
    }
    console.log(multiply(5));
    `,
    answers: [
      { answer: '5', id: '17', index: 'A' },
      { answer: 'NaN', id: '18', index: 'B' },
      { answer: 'undefined', id: '19', index: 'C' },
      { answer: '1', id: '20', index: 'D' }
    ],
    correctAnswerIndex: 'A'
  },
  {
    id: '6',
    quizId: '1',
    question: 'console.log(typeof NaN);',
    answers: [
      { answer: 'number', id: '21', index: 'A' },
      { answer: 'NaN', id: '22', index: 'B' },
      { answer: 'undefined', id: '23', index: 'C' },
      { answer: 'object', id: '24', index: 'D' }
    ],
    correctAnswerIndex: 'A'
  },
  {
    id: '7',
    quizId: '1',
    question:
    `
    var x = 1;
    {
      let x = 2;
      console.log(x);
    }
    console.log(x);
    `,
    answers: [
      { answer: '2, 2', id: '25', index: 'A' },
      { answer: '2, 1', id: '26', index: 'B' },
      { answer: '1, 2', id: '27', index: 'C' },
      { answer: '1, 1', id: '28', index: 'D' }
    ],
    correctAnswerIndex: 'B'
  },
  {
    id: '8',
    quizId: '1',
    question:
    `
    var x = 10;
    if (true) {
      var x = 20;
    }
    console.log(x);
    `,
    answers: [
      { answer: '10', id: '29', index: 'A' },
      { answer: '20', id: '30', index: 'B' },
      { answer: 'undefined', id: '31', index: 'C' },
      { answer: 'ReferenceError', id: '32', index: 'D' }
    ],
    correctAnswerIndex: 'B'
  },
  {
    id: '9',
    quizId: '1',
    question:
    `
    function outer() {
      var x = 1;
      function inner() {
        var x = 2;
        console.log(x);
      }
      inner();
    }
    outer();
    `,
    answers: [
      { answer: 'undefined', id: '29', index: 'A' },
      { answer: '1', id: '30', index: 'B' },
      { answer: '2', id: '31', index: 'C' },
      { answer: 'ReferenceError', id: '32', index: 'D' }
    ],
    correctAnswerIndex: 'C'
  },
  {
    id: '10',
    quizId: '1',
    question: 'console.log("Hello".charAt(0));',
    answers: [
      { answer: 'Hello', id: '29', index: 'A' },
      { answer: 'H', id: '30', index: 'B' },
      { answer: 'undefined', id: '31', index: 'C' },
      { answer: 'TypeError', id: '32', index: 'D' }
    ],
    correctAnswerIndex: 'B'
  }
]

export default QUESTIONS
