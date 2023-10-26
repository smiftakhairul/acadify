import { useSetRecoilState } from "recoil";
import { isLoggedInStateAtom } from "../utils/states/common";
import useAxios from "./useAxios";
import useStorage from "./useStorage";

const useApi = () => {
  const axiosClient = useAxios();
  const storage = useStorage();
  const setIsLoggedInState = useSetRecoilState(isLoggedInStateAtom);

  const commonFormBody = () => {
    const formData = new FormData();
    formData.append('reg_id', storage.getItem('_a_r_i') || '');
    formData.append('enc_key', storage.getItem('_a_e_k') || '');
    formData.append('lang', storage.getItem('lang') || 'en');
    return formData;
  }

  return {
    //
  };
};

export default useApi;
