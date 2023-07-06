import React, { useState } from "react";

const Calculator = () => {
  // useEffect(() => {
  // console.log("change");
  // }, [height, weight]);
  //
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [bmi, setBmi] = useState(0);
  const [text, setText] = useState();
  //
  function handleClick() {
    setBmi(parseFloat(weight / height ** 2).toFixed(1));
    //
    //
    if (bmi < 18.5) {
      setText("體重過輕");
    } else if (bmi >= 18.5 && bmi < 24) {
      setText("健康體位");
    } else if (bmi >= 24 && bmi < 27) {
      setText("過重（體位異常）");
    } else if (bmi >= 27 && bmi < 30) {
      setText("輕度肥胖（體位異常）");
    } else if (bmi >= 30 && bmi < 35) {
      setText("中度肥胖（體位異常）");
    } else if (bmi >= 35) {
      setText("重度肥胖（體位異常）");
    } else {
      setText("輸入錯誤數值");
    }
    //
    //
    console.log("BMI:" + bmi);
    // console.log("WEIGHT:" + weight);
    //console.log("Height:" + height);
    console.log("result:" + text);
  }

  //

  return (
    <>
      <div className="inputs">
        輸入您的身高（m）：{height}
        <br />
        <input
          placeholder="身高"
          onChange={(e) => {
            setHeight(parseFloat(e.target.value));
          }}
        />
        <br />
        <br />
        <br />
        輸入您的體重（kg）：{weight}
        <br />
        <input
          placeholder="體重"
          onChange={(e) => {
            setWeight(parseInt(e.target.value));
          }}
        />
        <br />
        <br />
        <button onClick={handleClick}>計算BMI</button>
        <br />
        <br />
        {bmi} <br />
        {text}
      </div>
    </>
  );
};
export default Calculator;
