'use strict';

//question area
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
  h1: "Do you have few or many datapoints?",
  class: "question",
  buttons: {
    button1: {
      label: "Few",
      id: "columnChart"
    },
    button2: {
      label: "Many",
      id: "lineChart"
    }
  }
};

let relational = {
  h1: "How many variables do you have?",
  class: "question",
  buttons: {
    button1: {
      label: "Two variables",
      id: "scatterPlot"
    },
    button2: {
      label: "Three variables",
      id: "bubble"
    }
  }

};

let composition = {
  h1: "How many variables do you have?",
  class: "question",
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
      label: "One variable",
      id: "oneVariablesDistribution"
    },
    button2: {
      label: "Two variables",
      id: "scatterPlot"
    }
  }
};

let oneVariablesDistribution = {
  class: "question",
  h1: "Do you have few or many datapoints?",
  buttons:  {
    button1: {
      label: "Few",
      id: "barChart"
      },
    button2: {
      label: "Many",
      id: "columnChart"
    }
  }
};


//begin graph creation area

let barChart = {
  class: "answer",
  h1: "You need a Bar Graph!",
  form: {
    form1: {
      label: "X axis data, separated by commas:",
      id: "labels"
    },
    form2: {
      label: "Y axis data, separated by commas:",
      id: "data"
    }
  },
  submit: {
    submit: "submit"
  },
  type: "bar"
};

let columnChart = {
  class: "answer",
  h1: "You need a Column Graph!",
  form: {
    form1: {
      label: "X axis data, separated by commas:",
      id: "labels"
    },
    form2: {
      label: "Y axis data, separated by commas:",
      id: "data"
    }
  },
  submit: {
    submit: "submit"
  },
  type: "bar"
};

let scatterPlot = {
  class: "answer",
  h1: "You need a Scatter Graph!",
  form: {
    form1: {
      label: "X axis data, separated by commas:",
      id: "x"
    },
    form2: {
      label: "Y axis data, separated by commas:",
      id: "y"
    }
  },
  submit: {
    submit: "submit"
  },
  type: "scatter"
};

let lineChart = {
  class: "answer",
  h1: "You should use a Line Graph!",
  form: {
    form1: {
      label: "X axis data, separated by commas:",
      id: "x"
    },
    form2: {
      label: "Y axis data, separated by commas:",
      id: "y"
    },
  },
  submit: {
    submit: "submit"
  },
  type: "line"
};


module.exports = {
  questionOneYes,
  composition,
  relational,
  comparison,
  distribution,
  scatterPlot,
  barChart,
  oneVariablesDistribution,
  columnChart,
  lineChart,

};
