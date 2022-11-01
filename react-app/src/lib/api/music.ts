import Cookies from "js-cookie";
import { getCurrentUser } from "./auth";
import client from "./client";

export const getList = () => {
  return client.get(`/musics`, {
    headers: {
      'access-token': Cookies.get('_access_token'),
      client: Cookies.get('_client'),
      uid: Cookies.get('_uid'),
    },
  });
};

export const getDetail = (id: number) => {
  return client.get(`/musics/${id}`, {
    headers: {
      'access-token': Cookies.get('_access_token'),
      client: Cookies.get('_client'),
      uid: Cookies.get('_uid'),
    },
  });
};

export const createMusic = (params: any) => {
  return client.post('/musics', params, {
    headers: {
      'access-token': Cookies.get('_access_token'),
      client: Cookies.get('_client'),
      uid: Cookies.get('_uid'),
    },
  });
};

export const updateMusic = (id: number, params: any) => {
  return client.patch(`/musics/${id}`, params, {
    headers: {
      'access-token': Cookies.get('_access_token'),
      client: Cookies.get('_client'),
      uid: Cookies.get('_uid'),
    },
  });
};