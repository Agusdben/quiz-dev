import { type QuestionWithCorrect } from '@/types/question'

const QUESTIONS: QuestionWithCorrect[] = [
  {
    id: '1',
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
      { answer: 'undefined', id: '33', index: 'A' },
      { answer: '1', id: '34', index: 'B' },
      { answer: '2', id: '35', index: 'C' },
      { answer: 'ReferenceError', id: '36', index: 'D' }
    ],
    correctAnswerIndex: 'C'
  },
  {
    id: '10',
    question: 'console.log("Hello".charAt(0));',
    answers: [
      { answer: 'Hello', id: '37', index: 'A' },
      { answer: 'H', id: '38', index: 'B' },
      { answer: 'undefined', id: '39', index: 'C' },
      { answer: 'TypeError', id: '40', index: 'D' }
    ],
    correctAnswerIndex: 'B'
  },
  {
    id: '11',
    question:
      `
      function sum(a, b) {
        return a + b;
      }
      
      console.log(sum(2, 3));
      `,
    answers: [
      { answer: '5', id: '41', index: 'A' },
      { answer: 'undefined', id: '42', index: 'B' },
      { answer: 'NaN', id: '43', index: 'C' },
      { answer: 'ReferenceError', id: '44', index: 'D' }
    ],
    correctAnswerIndex: 'A'
  },
  {
    id: '12',
    question:
      `
      var numbers = [1, 2, 3, 4, 5];
      var doubledNumbers = numbers.map(function(number) {
        return number * 2;
      });
      
      console.log(doubledNumbers);
      `,
    answers: [
      { answer: '[1, 2, 3, 4, 5]', id: '45', index: 'A' },
      { answer: '[2, 4, 6, 8, 10]', id: '46', index: 'B' },
      { answer: '[1, 2, 3, 4, 5, 2, 4, 6, 8, 10]', id: '47', index: 'C' },
      { answer: 'undefined', id: '48', index: 'D' }
    ],
    correctAnswerIndex: 'B'
  },
  {
    id: '13',
    question:
      `
      var x = 5;
      
      function multiplyByTwo() {
        var x = 2;
        return x * 2;
      }
      
      console.log(multiplyByTwo());
      `,
    answers: [
      { answer: '2', id: '49', index: 'A' },
      { answer: '4', id: '50', index: 'B' },
      { answer: '5', id: '51', index: 'C' },
      { answer: 'undefined', id: '52', index: 'D' }
    ],
    correctAnswerIndex: 'B'
  },
  {
    id: '14',
    question:
      `
      function sayHello(name) {
        console.log("Hello, " + name + "!");
      }
      
      sayHello("John");
      `,
    answers: [
      { answer: 'Hello, John!', id: '53', index: 'A' },
      { answer: 'Hello, undefined!', id: '54', index: 'B' },
      { answer: 'Hello, !', id: '55', index: 'C' },
      { answer: 'TypeError', id: '56', index: 'D' }
    ],
    correctAnswerIndex: 'A'
  },
  {
    id: '15',
    question:
      `
      var x = 10;
      function outer() {
        function inner() {
          console.log(x);
        }
        var x = 20;
        inner();
      }
      outer();
      `,
    answers: [
      { answer: '10', id: '57', index: 'A' },
      { answer: '20', id: '58', index: 'B' },
      { answer: 'undefined', id: '59', index: 'C' },
      { answer: 'ReferenceError', id: '60', index: 'D' }
    ],
    correctAnswerIndex: 'C'
  },
  {
    id: '16',
    question:
      `
      var x = 1;
      function foo() {
        x = 2;
      }
      foo();
      console.log(x);
      `,
    answers: [
      { answer: '1', id: '61', index: 'A' },
      { answer: '2', id: '62', index: 'B' },
      { answer: 'undefined', id: '63', index: 'C' },
      { answer: 'ReferenceError', id: '64', index: 'D' }
    ],
    correctAnswerIndex: 'B'
  },
  {
    id: '17',
    question:
      `
      var person = {
        firstName: 'John',
        lastName: 'Doe',
        fullName: function() {
          return this.firstName + ' ' + this.lastName;
        }
      };
      console.log(person.fullName());
      `,
    answers: [
      { answer: 'John Doe', id: '65', index: 'A' },
      { answer: 'undefined undefined', id: '66', index: 'B' },
      { answer: 'TypeError', id: '67', index: 'C' },
      { answer: 'ReferenceError', id: '68', index: 'D' }
    ],
    correctAnswerIndex: 'A'
  },
  {
    id: '18',
    question:
      `
      var numbers = [1, 2, 3, 4, 5];
      var sum = numbers.reduce(function(total, number) {
        return total + number;
      }, 0);
      console.log(sum);
      `,
    answers: [
      { answer: '15', id: '69', index: 'A' },
      { answer: '10', id: '70', index: 'B' },
      { answer: '5', id: '71', index: 'C' },
      { answer: 'NaN', id: '72', index: 'D' }
    ],
    correctAnswerIndex: 'A'
  },
  {
    id: '19',
    question:
      `
      function greet() {
        console.log("Hello, world!");
      }
      greet();
      `,
    answers: [
      { answer: 'Hello, world!', id: '73', index: 'A' },
      { answer: 'undefined', id: '74', index: 'B' },
      { answer: 'SyntaxError', id: '75', index: 'C' },
      { answer: 'ReferenceError', id: '76', index: 'D' }
    ],
    correctAnswerIndex: 'A'
  },
  {
    id: '20',
    question:
      `
      var x = 5;
      function multiplyByTwo(x) {
        return x * 2;
      }
      console.log(multiplyByTwo(3));
      `,
    answers: [
      { answer: '3', id: '77', index: 'A' },
      { answer: '5', id: '78', index: 'B' },
      { answer: '6', id: '79', index: 'C' },
      { answer: '10', id: '80', index: 'D' }
    ],
    correctAnswerIndex: 'C'
  },
  {
    id: '21',
    question:
      `
      var person = {
        name: 'Alice',
        age: 25,
        getInfo: function() {
          return 'Name: ' + this.name + ', Age: ' + this.age;
        }
      };
      console.log(person.getInfo());
      `,
    answers: [
      { answer: 'Name: Alice, Age: 25', id: '81', index: 'A' },
      { answer: 'undefined undefined', id: '82', index: 'B' },
      { answer: 'TypeError', id: '83', index: 'C' },
      { answer: 'ReferenceError', id: '84', index: 'D' }
    ],
    correctAnswerIndex: 'A'
  },
  {
    id: '22',
    question:
      `
      var numbers = [1, 2, 3, 4, 5];
      var filteredNumbers = numbers.filter(function(number) {
        return number > 2;
      });
      console.log(filteredNumbers);
      `,
    answers: [
      { answer: '[3, 4, 5]', id: '85', index: 'A' },
      { answer: '[1, 2, 3]', id: '86', index: 'B' },
      { answer: '[2, 3, 4, 5]', id: '87', index: 'C' },
      { answer: '[1]', id: '88', index: 'D' }
    ],
    correctAnswerIndex: 'A'
  },
  {
    id: '23',
    question:
      `
      function add(x, y) {
        return x + y;
      }
      var result = add(3, 4);
      console.log(result);
      `,
    answers: [
      { answer: '7', id: '89', index: 'A' },
      { answer: '12', id: '90', index: 'B' },
      { answer: '34', id: '91', index: 'C' },
      { answer: 'undefined', id: '92', index: 'D' }
    ],
    correctAnswerIndex: 'A'
  },
  {
    id: '24',
    question:
      `
      var x = 10;
      function outer() {
        console.log(x);
        var x = 20;
      }
      outer();
      `,
    answers: [
      { answer: '10', id: '93', index: 'A' },
      { answer: '20', id: '94', index: 'B' },
      { answer: 'undefined', id: '95', index: 'C' },
      { answer: 'ReferenceError', id: '96', index: 'D' }
    ],
    correctAnswerIndex: 'C'
  },
  {
    id: '25',
    question:
      `
      var person = {
        name: 'Jane',
        age: 35,
        sayHello: function() {
          console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
        }
      };
      person.sayHello();
      `,
    answers: [
      { answer: 'Hello, my name is Jane and I am 35 years old.', id: '97', index: 'A' },
      { answer: 'Hello, my name is undefined and I am undefined years old.', id: '98', index: 'B' },
      { answer: 'TypeError', id: '99', index: 'C' },
      { answer: 'ReferenceError', id: '100', index: 'D' }
    ],
    correctAnswerIndex: 'A'
  },
  {
    id: '26',
    question:
      `
      var numbers = [1, 2, 3, 4, 5];
      var sum = numbers.reduce((total, number) => total + number, 0);
      console.log(sum);
      `,
    answers: [
      { answer: '15', id: '101', index: 'A' },
      { answer: '10', id: '102', index: 'B' },
      { answer: '5', id: '103', index: 'C' },
      { answer: 'NaN', id: '104', index: 'D' }
    ],
    correctAnswerIndex: 'A'
  },
  {
    id: '27',
    question:
      `
      function multiply(x) {
        return function(y) {
          return x * y;
        };
      }
      var double = multiply(2);
      var result = double(5);
      console.log(result);
      `,
    answers: [
      { answer: '5', id: '105', index: 'A' },
      { answer: '10', id: '106', index: 'B' },
      { answer: '15', id: '107', index: 'C' },
      { answer: 'undefined', id: '108', index: 'D' }
    ],
    correctAnswerIndex: 'B'
  },
  {
    id: '28',
    question:
      `
      var x = 10;
      function inner() {
        console.log(x);
      }
      function outer() {
        var x = 20;
        inner();
      }
      outer();
      `,
    answers: [
      { answer: '10', id: '109', index: 'A' },
      { answer: '20', id: '110', index: 'B' },
      { answer: 'undefined', id: '111', index: 'C' },
      { answer: 'ReferenceError', id: '112', index: 'D' }
    ],
    correctAnswerIndex: 'A'
  },
  {
    id: '29',
    question:
      `
      var person = {
        firstName: 'John',
        lastName: 'Doe',
        getFullName: function() {
          return this.firstName + ' ' + this.lastName;
        }
      };
      var fullName = person.getFullName();
      console.log(fullName);
      `,
    answers: [
      { answer: 'John Doe', id: '113', index: 'A' },
      { answer: 'undefined undefined', id: '114', index: 'B' },
      { answer: 'TypeError', id: '115', index: 'C' },
      { answer: 'ReferenceError', id: '116', index: 'D' }
    ],
    correctAnswerIndex: 'A'
  },
  {
    id: '30',
    question:
      `
      var numbers = [1, 2, 3, 4, 5];
      var squaredNumbers = numbers.map(function(number) {
        return number * number;
      });
      console.log(squaredNumbers);
      `,
    answers: [
      { answer: '[1, 4, 9, 16, 25]', id: '117', index: 'A' },
      { answer: '[1, 2, 3, 4, 5]', id: '118', index: 'B' },
      { answer: '[2, 4, 6, 8, 10]', id: '119', index: 'C' },
      { answer: '[1, 8, 27, 64, 125]', id: '120', index: 'D' }
    ],
    correctAnswerIndex: 'A'
  },
  {
    id: '31',
    question:
      `
      var x = 5;
      function multiply() {
        var x = 2;
        console.log(x);
      }
      multiply();
      `,
    answers: [
      { answer: '5', id: '121', index: 'A' },
      { answer: '2', id: '122', index: 'B' },
      { answer: 'undefined', id: '123', index: 'C' },
      { answer: 'ReferenceError', id: '124', index: 'D' }
    ],
    correctAnswerIndex: 'B'
  },
  {
    id: '32',
    question:
      `
      var name = 'John';
      function sayHello() {
        console.log('Hello, ' + name + '!');
      }
      var name = 'Jane';
      sayHello();
      `,
    answers: [
      { answer: 'Hello, John!', id: '125', index: 'A' },
      { answer: 'Hello, Jane!', id: '126', index: 'B' },
      { answer: 'Hello, undefined!', id: '127', index: 'C' },
      { answer: 'ReferenceError', id: '128', index: 'D' }
    ],
    correctAnswerIndex: 'B'
  },
  {
    id: '33',
    question:
      `
      var numbers = [1, 2, 3, 4, 5];
      var sum = 0;
      for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
      }
      console.log(sum);
      `,
    answers: [
      { answer: '15', id: '129', index: 'A' },
      { answer: '10', id: '130', index: 'B' },
      { answer: '5', id: '131', index: 'C' },
      { answer: 'undefined', id: '132', index: 'D' }
    ],
    correctAnswerIndex: 'A'
  },
  {
    id: '34',
    question:
      `
      var x = 10;
      function increment() {
        x++;
      }
      increment();
      console.log(x);
      `,
    answers: [
      { answer: '10', id: '133', index: 'A' },
      { answer: '11', id: '134', index: 'B' },
      { answer: 'undefined', id: '135', index: 'C' },
      { answer: 'ReferenceError', id: '136', index: 'D' }
    ],
    correctAnswerIndex: 'B'
  },
  {
    id: '35',
    question:
      `
      function greet(name) {
        console.log('Hello, ' + name + '!');
      }
      greet();
      `,
    answers: [
      { answer: 'Hello, undefined!', id: '137', index: 'A' },
      { answer: 'Hello,!', id: '138', index: 'B' },
      { answer: 'TypeError', id: '139', index: 'C' },
      { answer: 'ReferenceError', id: '140', index: 'D' }
    ],
    correctAnswerIndex: 'A'
  },
  {
    id: '36',
    question:
      `
      var x = 1;
      function outer() {
        var x = 2;
        function inner() {
          var x = 3;
          console.log(x);
        }
        inner();
      }
      outer();
      `,
    answers: [
      { answer: '1', id: '141', index: 'A' },
      { answer: '2', id: '142', index: 'B' },
      { answer: '3', id: '143', index: 'C' },
      { answer: 'ReferenceError', id: '144', index: 'D' }
    ],
    correctAnswerIndex: 'C'
  },
  {
    id: '37',
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
      { answer: '10', id: '145', index: 'A' },
      { answer: '20', id: '146', index: 'B' },
      { answer: 'undefined', id: '147', index: 'C' },
      { answer: 'ReferenceError', id: '148', index: 'D' }
    ],
    correctAnswerIndex: 'C'
  },
  {
    id: '38',
    question:
      `
      function multiply(x, y) {
        return x * y;
      }
      console.log(multiply(5, 2));
      `,
    answers: [
      { answer: '7', id: '149', index: 'A' },
      { answer: '10', id: '150', index: 'B' },
      { answer: '12', id: '151', index: 'C' },
      { answer: 'undefined', id: '152', index: 'D' }
    ],
    correctAnswerIndex: 'B'
  },
  {
    id: '39',
    question:
      `
      var person = {
        name: 'John',
        age: 30,
        getInfo: function() {
          console.log('Name: ' + this.name + ', Age: ' + this.age);
        }
      };
      var getInfo = person.getInfo;
      getInfo();
      `,
    answers: [
      { answer: 'Name: John, Age: 30', id: '153', index: 'A' },
      { answer: 'Name: undefined, Age: undefined', id: '154', index: 'B' },
      { answer: 'TypeError', id: '155', index: 'C' },
      { answer: 'ReferenceError', id: '156', index: 'D' }
    ],
    correctAnswerIndex: 'B'
  },
  {
    id: '40',
    question:
      `
      var x = 10;
      if (true) {
        let x = 20;
      }
      console.log(x);
      `,
    answers: [
      { answer: '10', id: '157', index: 'A' },
      { answer: '20', id: '158', index: 'B' },
      { answer: 'undefined', id: '159', index: 'C' },
      { answer: 'ReferenceError', id: '160', index: 'D' }
    ],
    correctAnswerIndex: 'A'
  },
  {
    id: '41',
    question:
      `
      var x = 1;
      function outer() {
        var x = 2;
        function inner() {
          console.log(x);
        }
        inner();
      }
      outer();
      `,
    answers: [
      { answer: '1', id: '161', index: 'A' },
      { answer: '2', id: '162', index: 'B' },
      { answer: 'undefined', id: '163', index: 'C' },
      { answer: 'ReferenceError', id: '164', index: 'D' }
    ],
    correctAnswerIndex: 'B'
  },
  {
    id: '42',
    question:
      `
      var numbers = [1, 2, 3];
      numbers[5] = 5;
      console.log(numbers.length);
      `,
    answers: [
      { answer: '3', id: '165', index: 'A' },
      { answer: '4', id: '166', index: 'B' },
      { answer: '5', id: '167', index: 'C' },
      { answer: '6', id: '168', index: 'D' }
    ],
    correctAnswerIndex: 'D'
  },
  {
    id: '43',
    question:
      `
      function sum(a, b) {
        console.log(a + b);
      }
      sum(3, 4, 5);
      `,
    answers: [
      { answer: '7', id: '169', index: 'A' },
      { answer: '12', id: '170', index: 'B' },
      { answer: 'NaN', id: '171', index: 'C' },
      { answer: 'ReferenceError', id: '172', index: 'D' }
    ],
    correctAnswerIndex: 'A'
  },
  {
    id: '44',
    question:
      `
      var x = 10;
      function foo() {
        console.log(x);
      }
      foo();
      var x = 20;
      `,
    answers: [
      { answer: '10', id: '173', index: 'A' },
      { answer: '20', id: '174', index: 'B' },
      { answer: 'undefined', id: '175', index: 'C' },
      { answer: 'ReferenceError', id: '176', index: 'D' }
    ],
    correctAnswerIndex: 'A'
  },
  {
    id: '45',
    question:
      `
      var person = {
        name: 'John',
        age: 30,
        greet: function() {
          console.log('Hello, ' + this.name + '!');
        }
      };
      var greet = person.greet;
      greet();
      `,
    answers: [
      { answer: 'Hello, John!', id: '177', index: 'A' },
      { answer: 'Hello, undefined!', id: '178', index: 'B' },
      { answer: 'TypeError', id: '179', index: 'C' },
      { answer: 'ReferenceError', id: '180', index: 'D' }
    ],
    correctAnswerIndex: 'B'
  },
  {
    id: '46',
    question:
      `
      var x = 1;
      if (true) {
        var x = 2;
      }
      console.log(x);
      `,
    answers: [
      { answer: '1', id: '181', index: 'A' },
      { answer: '2', id: '182', index: 'B' },
      { answer: 'undefined', id: '183', index: 'C' },
      { answer: 'ReferenceError', id: '184', index: 'D' }
    ],
    correctAnswerIndex: 'B'
  }

]

export default QUESTIONS
