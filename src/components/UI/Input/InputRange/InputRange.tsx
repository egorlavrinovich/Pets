import React, { useState, useEffect, ChangeEvent } from "react";
import "rc-slider/assets/index.css";
// @ts-ignore
import Slider from "rc-slider";
import { useDispatch } from "react-redux";
import { addRange } from "../../../../Redux/FilterSlice";
import Input from "../Input";

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);
const InputRange = React.memo(() => {
  const [active, setactiv] = useState<boolean>(false); // цена, выбранная с помощью пользователя
  const [rangePriceInput, setRangePriceInput] = useState<any>([0, 500]); // фильтр цен
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addRange(rangePriceInput)); // добавляем фильтр для цены
  }, [active]);
  return (
    <>
      <div className="input-range-wrapper">
        <h5>Фильтр по цене</h5>
        <div className="filter-price-input">
          <Input
            type="text"
            value={rangePriceInput[0]}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setRangePriceInput([+e.target.value, rangePriceInput[1]])
            }
            placeholder=""
          />
          <h3>–</h3>
          <Input
            type="text"
            value={rangePriceInput[1]}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setRangePriceInput([rangePriceInput[0], +e.target.value])
            }
            placeholder=""
          />{" "}
        </div>
        <div className="filter-price-range">
          <Range
            value={rangePriceInput}
            marks={{
              0: `0`,
              500: `500`,
            }}
            min={0}
            max={500}
            onChange={(e: []) => setRangePriceInput(e)}
            onBlur={() => setactiv(!active)}
          />
        </div>
      </div>
    </>
  );
});

export default InputRange;
