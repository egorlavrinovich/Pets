import Svg from "../Svg/Svg";
const GoodsCounter = ({ setCount, count }: any) => {
  return (
    <div className="counter-block">
      <div
        className="counter-block-minus"
        onClick={() => setCount((x: number) => (x > 1 && x - 1) || 1)}
      >
        <Svg type="minus" />
      </div>
      <div className="counter-block-count">{count}</div>
      <div
        className="counter-block-plus"
        onClick={() => setCount((x: number) => x + 1)}
      >
        <Svg type="plus" />
      </div>
    </div>
  );
};

export default GoodsCounter;
