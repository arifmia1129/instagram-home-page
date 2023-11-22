/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, InputHTMLAttributes } from "react";

interface IOption {
  name: string;
  value: any;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  error?: string;
  register?: any;
  placeholderTxt?: string;
  className?: string;
  options: IOption[];
}

const Select: FC<InputProps> = ({
  register,
  name,
  error,
  label,
  options,
  ...rest
}) => {
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>

      <select {...register(name)} {...rest} className="select select-bordered">
        {options?.map(({ name, value }: IOption) => (
          <option value={value}>{name}</option>
        ))}
      </select>
      <label className="label">
        {error && (
          <span role="alert">
            <small className="text-red-500">{error}</small>
          </span>
        )}
      </label>
    </div>
  );
};

export default Select;
