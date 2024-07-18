import type { Tree } from '@/types/types'

export const bindFindKeys = <T extends Tree>(
  list: T[],
  id: number | string,
  field: string
): (string | number)[] => {
  if (!list || !id) {
    return []
  }
  const arr: (string | number)[] = []
  const findParent = (data: Tree[], nodeId: number | string): void => {
    for (const node of data) {
      if (node.id === nodeId) {
        arr.unshift(node[field])
        node.parentId && findParent(list, node.parentId)
        return
      }
      if (node.children) {
        findParent(node.children, nodeId)
      }
    }
  }

  findParent(list, id)
  return arr
}
