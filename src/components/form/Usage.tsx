/* eslint-disable @typescript-eslint/no-explicit-any */
import Form from "./Form";
import Input from "./Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import File from "./File";
import Select from "./Select";

// interface for form
interface EmailInterface {
  email: string;
  password: string;
}

// validation
const EmailSchema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .max(32, "Max password length is 32")
    .required("Password is required"),
  image: yup
    .mixed()
    .test("required", "You need to provide a file", (file: any) => {
      if (file.length) return true;
      return false;
    }),
});

const Usage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(EmailSchema) });

  const onSubmit = (data: EmailInterface) => console.log(data);

  console.log(errors);
  return (
    <Form
      buttonLabel="Change Email"
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      className="change-form"
    >
      <Input
        name="email"
        type="email"
        placeholderTxt="Enter your email"
        error={errors.email?.message}
        autoFocus
      />
      <Input
        name="password"
        type="password"
        placeholderTxt="Password"
        error={errors.password?.message}
      />
      <File name="image" error={errors.image?.message} />
      <Select name="class" options={[{ name: "Class 5", value: "5th" }]} />
    </Form>
  );
};

export default Usage;
