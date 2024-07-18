export interface IMenus {
  parentId: number | string
  name: string
  path: string
  icon: string
  subMenus: IMenus[]
}

export interface Tree {
  [key: string]: any
  // children?: T[]
}
