import request from '@/utils/request'

export function getProductList(data) {
    return request({
      url: '/productlist',
      method: 'get',
      data
    })
  }

