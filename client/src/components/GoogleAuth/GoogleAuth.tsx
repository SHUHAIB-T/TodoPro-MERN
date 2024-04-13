import { useGoogleLogin } from "@react-oauth/google";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { googleAuth } from "../../servieces/autthServiece";
import { useEffect, useState } from "react";
import { reset } from "../../features/authSlice";
import Loader from "../Loader/Loader1/Loader1";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

type prop = {
  method: string;
};

export default function GoogleAuth({ method }: prop) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isSubmit, setIsSubmit] = useState(false);

  const { isLoading, isError, user, isSuccess, errorMessage } = useAppSelector(
    (state) => state.auth
  );

  const [data, setData] = useState({
    accessToken: "",
  });

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
      dispatch(reset());
    }
  }, [user, isSuccess, dispatch, navigate]);

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const accessToken = tokenResponse.access_token;
      setData({
        accessToken: accessToken,
      });
      setIsSubmit(true);
    },
  });

  useEffect(() => {
    if (isError) {
      toast.error(errorMessage.message);
      dispatch(reset());
    }
  }, [isError, errorMessage, dispatch]);

  useEffect(() => {
    if (isSubmit && data.accessToken) {
      dispatch(googleAuth(data));
    }
    setIsSubmit(false);
  }, [data, dispatch, isSubmit]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <button
      onClick={() => login()}
      className="flex gap-2 w-full items-center shadow font-medium text-slate-700 border py-1 justify-center rounded-md"
    >
      <img
        width="25"
        height="25"
        src="https://img.icons8.com/color/48/google-logo.png"
      />
      {method} with Google
    </button>
  );
}
