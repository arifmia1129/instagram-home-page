/* eslint-disable @typescript-eslint/no-explicit-any */

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Form from "../../components/form/Form";
import Input from "../../components/form/Input";
import logo from "../../assets/Instagram_logo.png";
import FacebookLogin from "../../components/authentication/Login/FacebookLogin";
import DonotAccout from "../../components/authentication/Login/DonotAccout";
import GetApp from "../../components/authentication/Login/GetApp";
import { useEffect } from "react";
import { LoginSchema } from "../../components/form/validationSchema/ValidationSchema";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import Loading from "../../components/shared/Loading";
import { loginUser, toggleLoading } from "../../redux/features/user/userSlice";

// interface for form
interface ILogin {
  userName: string;
  password: string;
}

const Login = () => {
  useEffect(() => {
    (document as any).getElementById("login-modal").showModal();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(LoginSchema) });

  const { isLoading } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const onSubmit = (data: ILogin) => {
    dispatch(loginUser({ userName: data.userName }));
    setTimeout(() => {
      dispatch(toggleLoading());
    }, 2000);
  };

  if (isLoading) {
    return <Loading />;
  }

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
                name="userName"
                type="text"
                placeholderTxt="Phone number, username or email"
                error={errors.userName?.message}
                register={register}
                autoFocus
                className="h-10 rounded-none border-gray-400 bg-gray-100"
              />
              <Input
                name="password"
                type="password"
                placeholderTxt="Password"
                error={errors.password?.message}
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
