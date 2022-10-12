import React, { useState, useEffect, ChangeEvent } from "react";
import "rc-slider/assets/index.css";
// @ts-ignore
import Slider from "rc-slider";
import { useDispatch } from "react-redux";
import { addRange } from "../../../../Redux/FilterSlice";
import { UseChangeInput } from "../../../../hooks/UseChangeInput";
import Input from "../Input";
const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);
const InputRange = React.memo(() => {
  const [state, setstate] = useState<any>([0, 500]); // выбранная цена пользователем
  const [range, setrange] = useState([0, 500]); // Диапазон цен
  const [active, setactiv] = useState<boolean>(false); // маркер наблюдение за ценой пользователя
  const [rangePriceInput, setRangePriceInput] = useState<any>([0, 100]); // фильтр цен
  const dispatch = useDispatch();
  useEffect(() => {
    // @ts-ignore
    dispatch(addRange(state)); // добавляем фильтр для цены
  }, [active]);
  console.log(rangePriceInput);
  return (
    <div className="input-range-wrapper">
      <Input
        type="text"
        value={rangePriceInput[0]}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setRangePriceInput([+e.target.value, rangePriceInput[1]])
        }
        placeholder=""
      />
      <Input
        type="text"
        value={rangePriceInput[1]}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setRangePriceInput([rangePriceInput[0], +e.target.value])
        }
        placeholder=""
      />{" "}
      <Range
        value={state}
        marks={{
          0: `0 руб`,
          500: `500 руб`,
        }}
        min={range[0]}
        max={range[1]}
        defaultValue={[0, 500]}
        onChange={(e: []) => setstate(e)}
        onBlur={() => setactiv(!active)}
      />
    </div>
  );
});

export default InputRange;
