import { CheckCircledIcon } from "@radix-ui/react-icons"; "@radix-ui/react-icons";

interface FormSuccessPorps {
  message?: string;
}

export const FormSuccess = ({
  message,
}: FormSuccessPorps) => {
  if (!message) return;

  return (
    <div className="bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-500">
      <CheckCircledIcon className="h-4 w-4" />
      <p>{message}</p>
    </div>
  )
}