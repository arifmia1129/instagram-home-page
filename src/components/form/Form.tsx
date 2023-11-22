/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, createElement } from "react";
import { ReactNode } from "react";

export type classNameType = string;
export type childrenType = ReactNode;

export interface IFormProps {
  defaultValues?: any;
  children?: childrenType;
  buttonLabel?: string;
  onSubmit?: any;
  handleSubmit?: any;
  register?: any;
  className?: classNameType;
  btnClass: string;
}

const Form: FC<IFormProps> = ({
  //   defaultValues,
  buttonLabel = "Submit",
  children,
  onSubmit,
  handleSubmit,
  register,
  btnClass,
  ...rest
}) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)} {...rest}>
      <div className="flex justify-center">
        <div>
          {Array.isArray(children)
            ? children.map((child) => {
                return child.props.name
                  ? createElement(child.type, {
                      ...{
                        ...child.props,
                        register,
                        key: child.props.name,
                      },
                    })
                  : child;
              })
            : children}
        </div>
      </div>
      <div className="flex justify-center">
        <button className={` text-white ${btnClass}`}>{buttonLabel}</button>
      </div>
    </form>
  );
};

export default Form;
