import { useState } from "react";
import Button from "./Button";
import Food from "./Food";
import zzal from "./zzal.gif";

function App() {
  const foods = [
    "피자",
    "햄버거",
    "김치찌개",
    "족발",
    "떡볶이",
    "파스타",
    "부리또",
    "컵라면",
    "바나나",
    "그릭요거트",
    "탕수육",
    "치킨",
    "돈까스",
    "우동",
    "김밥",
    "잔치국수",
    "전",
    "닭꼬치",
    "닭갈비",
    "찜닭",
    "부대찌개",
  ];
  const [num, setNum] = useState(0);
  function randomNum(n) {
    return Math.ceil(Math.random() * n);
  }
  const btnClickHandle = () => {
    const nextNum = randomNum(foods.length - 1);
    setNum(nextNum);
  };

  return (
    <div className="App">
      <h1>오늘 뭐 먹지?</h1>
      <Button onClick={btnClickHandle} />
      <img src={zzal} alt="뭐먹을지 열심히 고민하는 얼굴 짤" />
      <Food num={num} foods={foods} />
    </div>
  );
}

export default App;
