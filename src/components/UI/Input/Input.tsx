import React, { FC, FocusEventHandler } from "react";

interface IInput {
  type: string;
  placeholder?: string;
  value?: string | any;
  onChange?: React.ChangeEventHandler | undefined;
  name?: string;
  onBlur?: React.EventHandler<any>;
  id?: any;
  cheked?: any;
}

const Input: FC<IInput> = ({
  onBlur,
  type,
  name,
  placeholder,
  value,
  onChange,
  id,
  cheked,
}) => {
  // @ts-ignore
  return (
    <input
      id={id}
      onBlur={onBlur}
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      checked={cheked}
    />
  );
};

export default Input;
