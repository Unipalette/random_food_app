function Food({ num, foods, onClick }) {
  return (
    <div className="Food" onClick={onClick}>
      <div className="txt_box">
        <p className="food_name">{foods[num]}</p>
        <p className="more">아무데나 눌러서 다시 하기</p>
      </div>
    </div>
  );
}
export default Food;
