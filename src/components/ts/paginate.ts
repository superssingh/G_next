import _ from 'lodash'

type PaginateFn<T> = (
  itemList: T[],
  pageNumber: number,
  pageSize: number
) => T[]

const Paginate: PaginateFn<any> = (itemList, pageNumber, pageSize) => {
  const startIndex = (pageNumber - 1) * pageSize
  return _(itemList).slice(startIndex).take(pageSize).value()
}

export default Paginate
