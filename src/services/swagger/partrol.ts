import { request } from 'umi';

export async function recordList(
  params: {
    pageNo: number;
    pageSize: number;
    params: object;
  },
  options?: { [key: string]: any },
) {
  return requset<string>(`/api/supervise/getFacSupervise?pageNo=${params.pageNo}&pageSize=${params.pageSize}`, {

  })
}
