import { toast } from "react-toastify";
import { defaultToastrConfig } from "../utils/constants/common";

const useNotification = () => {
  const updateOrNew = (node: any, type: any, options?: any) => {
    if (toast.isActive(defaultToastrConfig?.toastId)) {
      toast.update(defaultToastrConfig?.toastId, {render: node, type});
    } else {
      toast(node, {type, ...(options || defaultToastrConfig)});
    }
  }

  const basic = (node: any, options?: any) => updateOrNew(node, toast.TYPE.DEFAULT, options);
  const success = (node: any, options?: any) => updateOrNew(node, toast.TYPE.SUCCESS, options);
  const error = (node: any, options?: any) => updateOrNew(node, toast.TYPE.ERROR, options);
  const warn = (node: any, options?: any) => updateOrNew(node, toast.TYPE.WARNING, options);
  const info = (node: any, options?: any) => updateOrNew(node, toast.TYPE.INFO, options);
  const dismiss = () =>  toast.dismiss();

  return {
    basic,
    success,
    error,
    warn,
    info,
    dismiss
  };
}

export default useNotification;
