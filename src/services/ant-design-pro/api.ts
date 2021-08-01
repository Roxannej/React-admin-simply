// @ts-ignore
/* eslint-disable */
import { request } from 'umi';
import axios from 'axios'
import ListBody from 'antd/lib/transfer/ListBody';

/** 获取当前的用户 GET /api/currentUser */
export async function currentUser(options?: { [key: string]: any }) {
  return request<API.CurrentUser>('/api/currentUser', {
    // headers:{
    //   'Content-Type': 'application/x-www-form-urlencoded',
    //   'authorization':`Bearer ${localStorage.getItem('token')}`
    // },
    method: 'GET',
    ...(options || {}),
  });
}

/** 退出登录接口 POST /api/login/outLogin */
export async function outLogin(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/login/outLogin', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 列表 POST 浏览记录列表 */
// export function
// export async function recordList(params: {
//   pageSize:string;
//   pageNo:string;
//   params: any;
// }, options?: { [key: string]: any }) {
//   const { pageSize, pageNo} = params;
//   return request<API.ListResult>(`/api/supervise/getFacSupervise?pageSize=${pageSize}&pageNo=${pageNo}`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json;charset=UTF-8',
//       'Authorization': `${localStorage.getItem('token')}`,
//     },
//     data: params,
//     // params:{...params},
//     ...(options || {}),
//   });
// }
export async function recordList(body:{
  pageSize:number;
  pageNo:number;
  params: any;
},
//   params:{
//   pageSize:number;
//   pageNo:number;
// },
options: { [key: string]: any }) {
  return request<API.ListResult>(`/api/supervise/getFacSupervise?pageSize=${body.pageSize}&pageNo=${body.pageNo}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;',
    },
    // params: {
    //   ...params
    // },
    data:body,
    ...(options || {}),
  });
}

/** 获取不同的巡检列表的附件 */
export async function picData(params: {
  pid?:string;
  type?: string;
}, options?: { [key: string]: any}) {
  return request<API.picList>(`/api/file/selectOneByPid?pid=${params.pid}&type=${params.type}`, {
    method:'GET',
    params: {
      ...params
    },
    ...addRule(options || {})
  })
}

/** 登录接口 POST /api/login/account */
export async function login(body: API.LoginParams, options?: { [key: string]: any }) {
  return request<API.LoginResult>('/api/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /api/notices */
// export async function getNotices(options?: { [key: string]: any }) {
//   return request<API.NoticeIconList>('/api/notices', {
//     method: 'GET',
//     ...(options || {}),
//   });
// }

/** 获取规则列表 GET /api/rule */
export async function rule(
  params: {
    // query
    /** 当前的页码 */
    current?: number;
    /** 页面的容量 */
    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.RuleList>('/api/rule', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 新建规则 PUT /api/rule */
export async function updateRule(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('/api/rule', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** 新建规则 POST /api/rule */
export async function addRule(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('/api/rule', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 删除规则 DELETE /api/rule */
export async function removeRule(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/rule', {
    method: 'DELETE',
    ...(options || {}),
  });
}
