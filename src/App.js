import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <CheckBoxList />
    </div>
  );
}

const CheckBoxList = props => {
  const [check, setCheck] = React.useState(() => []);

  const onChangeHandler = () => {
    let val = event.target.value;
    let isChecked = event.target.checked;

    if (isChecked) {
      console.log(isChecked, val, check);
      setCheck([...check, val]);
      console.log(check);
    } else {
      setCheck([...check.filter(item => item !== val)]);
    }
  };

  return (
    <div className="container">
      <div onChange={onChangeHandler} className="checkbox">
        <div>
          <input type="checkbox" value="checkbox1" />
          <label>Checkbox 1</label>
        </div>
        <div>
          <input type="checkbox" value="checkbox2" />
          <label>Checkbox 2</label>
        </div>
        <div>
          <input type="checkbox" value="checkbox3" />
          <label>Checkbox 3</label>
        </div>
      </div>
      <div className="result">
        <CheckboxSelectedList data={check} />
      </div>
    </div>
  );
};

const CheckboxSelectedList = ({ data }) => {
  return (
    <ul>
      {data.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};
