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

const File: FC<InputProps> = ({ register, name, error, label, ...rest }) => {
  return (
    <div className="form-control w-full">
      <label className="label">
        <span className="label-text">{label}</span>
      </label>
      <input
        {...register(name)}
        {...rest}
        type="file"
        className="file-input file-input-bordered file-input-primary w-full md:w-96"
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

export default File;
