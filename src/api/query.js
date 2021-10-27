import request from '@/utils/request'

export function query(data) {
  return request({
    url: '/query',
    method: 'post',
    data
  })
}


