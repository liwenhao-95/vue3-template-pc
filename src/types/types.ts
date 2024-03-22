export interface IMenus {
  parentId: number | string;
  name: string;
  path: string;
  icon: any;
  subMenus: IMenus[]
}