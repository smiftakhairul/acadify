import { useRecoilCallback, useSetRecoilState } from "recoil";
import { isLoggedInStateAtom } from "../utils/states/common";
import useAxios from "./useAxios";
import useStorage from "./useStorage";

const useApi = () => {
  const axiosClient = useAxios();
  const storage = useStorage();
  const setIsLoggedInState = useSetRecoilState(isLoggedInStateAtom);

  const commonFormBody = useRecoilCallback(({snapshot}) => () => {
    const isLoggedInState = snapshot.getLoadable(isLoggedInStateAtom).contents;
    const formData = new FormData();
    if (isLoggedInState) {
      formData.append('reg_id', storage.getItem('_a_r_i') || '');
      formData.append('enc_key', storage.getItem('_a_e_k') || '');
    }
    return formData;
  })

  const facultyLogin = async (data: any) => {
    const body = commonFormBody();
    body.append('username', data?.username);
    body.append('password', data?.password);
    
    const response = await axiosClient.apiClient('POST', '/faculty/login', body);
    setIsLoggedInState(true);
    storage.setItem('authenticated', true);
    storage.setItem('_a_r_i', 'xGdhl34DKlswr11-sgGEDldGDET');
    storage.setItem('_a_e_k', 'ySdhl39DKlswr11-tgtEDldADET');
    storage.setItem('user', JSON.stringify({
      'id': 1,
      'name': 'Test Faculty',
      'username': 'test.faculty',
      'email': 'test.faculty@gmail.com',
      'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe adipisci, doloribus sed dolores velit officiis nulla earum officia ipsum, quo atque laudantium! Ea incidunt nesciunt blanditiis. Facere alias soluta quam.',
      'designation': 'Assistant Professor',
      'address': 'Maliseba, Yekaterinburg, Russia 62000',
      'phone': '+7(965)513-6436',
      'website': 'www.example.com',
      'github': 'testfaculty',
      'twitter': '@testfaculty',
      'vk': 'testfaculty',
      'facebook': 'testfaculty'
    }));
    return null;
  }

  const facultyRegister = async (data: any) => {
    const body = commonFormBody();
    body.append('username', data?.username);
    body.append('email', data?.email);
    body.append('password', data?.password);
    
    const response = await axiosClient.apiClient('POST', '/faculty/register', body);
    return null;
  }

  const logout = async () => {
    setIsLoggedInState(false);
    storage.removeItem('authenticated');
    storage.removeItem('_a_r_i');
    storage.removeItem('_a_e_k');
    storage.removeItem('user');
    return null;
  }

  return {
    facultyLogin,
    facultyRegister,
    logout
  };
};

export default useApi;
