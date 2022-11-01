import client from "./client";
import Cookies from "js-cookie"

import { SignUpParams, SignInParams } from "../../interfaces/index"

// サインアップ（新規アカウント作成）
export const signUp = (params: SignUpParams) => {
  return client.post("admin", params)
}

// サインイン（ログイン）
export const signIn = (params: SignInParams)  => {
  return client.post("admin/sign_in", params)
}

// サインアウト（ログアウト）
export const signOut = () => {
  return client.delete("admin/sign_out", { headers: {
    "access-token": Cookies.get("_access_token"),
    "client": Cookies.get("_client"),
    "uid": Cookies.get("_uid")
  }})
}

// 認証済みのユーザーを取得
export const getCurrentUser = () => {
  if (!Cookies.get("_access_token") || !Cookies.get("_client") || !Cookies.get("_uid")) return
  return client.get("/admin/sessions", { headers: {
    "access-token": Cookies.get("_access_token"),
    "client": Cookies.get("_client"),
    "uid": Cookies.get("_uid")
  }})
}