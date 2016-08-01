'use strict';


let questionOneYes = {
  h1: "What is your data like?",
  class: "question",
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
  class: "question",
  buttons: {
    button1: "comparisonanswer",
    button2: "comparisonanswer",
  }
};

let relational = {
  h1: "How many variables do you have?",
  class: "question",
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
  h1: "How many variables do you have?",
  buttons: {
    button1: {
      label: "Two variables",
      id: "twoVariablesComposition"
    },
    button2: {
      label: "Three variables",
      id: "threeVariablesComposition"
    }
  }


};

let distribution = {
  h1: "How many variables do you have?",
  class: "question",
  buttons: {
    button1: {
      label: "Two variables",
      id: "twoVariablesDistribution"
    },
    button2: {
      label: "Three variables",
      id: "threeVariablesDistribution"
    }
  }


};

let twoVariables = {
  class: "answer",
  h1: "You need a scatter plot!",
  form: {
    form1: "X axis data, separated by commas:",
    form2: "Y axis data, separated by commas:"
  },
  submit: {
    submit: "submit"
  }
};


module.exports = {
  questionOneYes,
  composition,
  relational,
  comparison,
  distribution,
  twoVariables,
};
