import { AxiosError } from "axios";
import { ShowToast } from "./ShowToast";
import { XCircleIcon } from "@heroicons/react/24/outline";

export const AxiosErrorHandler = (e: any) => {
  // set proper error
  const error: AxiosError = e;

  ShowToast(
    "Something went wrong",
    (error?.response?.data?.status_message as string) || error.message,
    <XCircleIcon className="w-8 h-8 text-red-500" />,
    "text-red-700"
  );
};
