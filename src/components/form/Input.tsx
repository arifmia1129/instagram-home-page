/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  error?: string;
  register?: any;
  placeholderTxt?: string;
  className?: string;
}

const Input: FC<InputProps> = ({
  register,
  name,
  type,
  error,
  label,
  placeholderTxt,
  ...rest
}) => {
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        {...register(name)}
        {...rest}
        type={type}
        placeholder={placeholderTxt}
        className="input input-bordered w-full md:w-96"
      />
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

export default Input;
