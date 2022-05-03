/** 常用分页参数 */
export interface PageParams {
  /** 分页页数 */
  pageNum: number
  /** 每页数量 */
  pageSize: number
}

/** 分页响应结构 */
export interface PageResult {
  /** 总页数 */
  totalPage: number
  /** 总数量 */
  totalNum: number
}