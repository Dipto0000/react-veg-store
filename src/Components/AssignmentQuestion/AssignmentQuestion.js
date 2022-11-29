import React from "react";

const AssignmentQuestion = () => {
  return (
    <div>
      <p>
        <strong>Q1: How react works?</strong>
        ReactJS divides the UI into isolated reusable pieces of code known as
        components. React components work similarly to JavaScript functions as
        they accept arbitrary inputs called properties or props. It's possible
        to have as many components as necessary without cluttering your code. It
        creates a virtual dom whenever something is changed and re render by
        comparing with the virtual dom. Then the changed items are shown in the
        UI
      </p>
      <strong>Q2: How useState works?</strong>
      UseState encapsulate only singular value from the state, for multiple
      state need to have useState calls. Syntax: The first element is the
      initial state and the second one is a function that is used for updating
      the state. We can also pass a function as an argument if the initial state
      has to be computed.
    </div>
  );
};

export default AssignmentQuestion;
