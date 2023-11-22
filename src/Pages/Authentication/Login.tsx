/* eslint-disable @typescript-eslint/no-explicit-any */
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from "../../components/form/Form";
import Input from "../../components/form/Input";
import logo from "../../assets/Instagram_logo.png";
import FacebookLogin from "../../components/authentication/Login/FacebookLogin";
import DonotAccout from "../../components/authentication/Login/DonotAccout";
import GetApp from "../../components/authentication/Login/GetApp";
import { useEffect } from "react";
import toast from "react-hot-toast";

// interface for form
interface ILogin {
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
      if (file?.length) return true;
      return false;
    }),
});

const Login = () => {
  useEffect(() => {
    toast.success("hello");
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(EmailSchema) });

  const onSubmit = (data: ILogin) => console.log(data);

  return (
    <>
      <div className="flex justify-center items-center h-screen w-full">
        <div>
          <div className="w-fit h-fit shadow-xl border p-5 md:p-10 rounded-lg">
            <div className="flex justify-center">
              <img className="w-44 h-20" src={logo} alt="" />
            </div>
            <Form
              buttonLabel="Login"
              register={register}
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
              className="change-form"
              btnClass="bg-primary h-8 flex items-center justify-center py-2 w-full mt-4 rounded"
            >
              <Input
                name="email"
                type="text"
                placeholderTxt="Phone number, username or email"
                error={errors.email?.message}
                register={register}
                autoFocus
                className="h-10 rounded-none border-gray-400 bg-gray-100"
              />
              <Input
                name="email"
                type="text"
                placeholderTxt="Password"
                error={errors.email?.message}
                register={register}
                autoFocus
                className="h-10 rounded-none border-gray-400 bg-gray-100"
              />
            </Form>
            <div className="divider divider-primary">OR</div>
            <FacebookLogin />
            <button className="w-full flex justify-center mt-5">
              <p className="text-center text-blue-800">
                <small>Forgot password?</small>
              </p>
            </button>
          </div>
          <DonotAccout />
          <GetApp />
        </div>
      </div>
    </>
  );
};

export default Login;
