'use strict';


let questionOneYes = {
  h1: "What is your data like?",
  buttons: {
    button1: {
      label: "Comparison",
      id: "comparison"
    },
    button2: {
      label: "Relational",
      id: "relational"
    },
    button3: {
      label: "Composition",
      id: "composition"
    },
    button4: {
      label: "Distribution",
      id: "distribution"
    }
  }
};

let comparison = {
  h1: "comparisonquestion",
  buttons: {
    button1: "comparisonanswer",
    button2: "comparisonanswer",
  }
};

let relational = {
  h1: "How many variables do you have?",
  buttons: {
    button1: {
      label: "Two variables",
      id: "twoVariables"
    },
    button2: {
      label: "Three variables",
      id: "threeVariables"
    }
  }

};

let composition = {

};

let distribution = {

};


module.exports = {
  questionOneYes,
  composition,
  relational,
  comparison,
  distribution,
};
