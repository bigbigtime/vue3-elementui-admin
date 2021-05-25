import Cookies from "js-cookie";
// 变量
const tokenKey = "tokenAdmin";
const userNameKey = "username";

// 获取token
export function getToken(){ return Cookies.get(tokenKey); }
// 写入token
export function setToken(value){ Cookies.set(tokenKey, value); }
// 删除token
export function removeToken(){ Cookies.remove(tokenKey); }

// 获取userName
export function getUsername(){ return Cookies.get(userNameKey); }
// 写入userName
export function setUsername(value){ Cookies.set(userNameKey, value); }
// 删除userName
export function removeUsername(){ Cookies.remove(userNameKey); }
