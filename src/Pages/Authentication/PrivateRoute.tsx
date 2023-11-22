import { Navigate, useLocation } from "react-router-dom";
import { ReactNode } from "react";
import { useAppSelector } from "../../redux/hooks";

interface IProps {
  children: ReactNode;
}

export default function PrivateRoute({ children }: IProps) {
  const { email, isLoading } = useAppSelector((state) => state.user);

  const { pathname } = useLocation();

  if (isLoading) {
    return <p>Loading....</p>;
  }

  if (!email) {
    return <Navigate to="/login" state={{ path: pathname }} />;
  }

  return children;
}
