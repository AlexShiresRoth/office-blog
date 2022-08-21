import Container from "./container";
import cn from "classnames";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hooks";
import { selectAlertState, setAlert } from "../redux/reducers/contact.reducer";
import { useEffect } from "react";

export default function Alert({ preview }) {
  const { message, status } = useAppSelector(selectAlertState);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status) {
      setTimeout(() => {
        dispatch(setAlert({ message: "", status: undefined }));
      }, 4000);
    }
  }, [status]);

  if (!status) {
    return null;
  }
  return (
    <div
      className={cn(
        "border-b flex items-center h-14 fixed top-0 z-50 w-full shadow-xl font-semibold transition-all duration-200 ease-in-out",
        {
          "bg-green-500 border-green-500 text-white": status === "success",
          "bg-red-300/50 border-red-300 text-white": status === "error",
        }
      )}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          <p>{message ?? ""}</p>
        </div>
      </Container>
    </div>
  );
}
