import React from 'react';
import { Input as AntInput } from 'antd';

import { IInputProps } from './interface';

export const Input = ({ placeholder, onChange, ...props }: IInputProps) => {
  const handleChange = (value: string) => {
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <AntInput
      placeholder={placeholder}
      allowClear
      onChange={({ target: { value } }) => handleChange(value)}
      {...props}
    />
  );
};
