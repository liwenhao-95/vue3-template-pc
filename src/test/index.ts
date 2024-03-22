export const tree = [
  {
    name: '江苏省',
    id: 1,
    parentId: -1,
    children: [
      {
        name: '常州市',
        id: 11,
        parentId: 1
      },
      {
        name: '南京市',
        id: 12,
        parentId: 1,
        children: [
          {
            name: '江宁区',
            id: 121,
            parentId: 12
          },
          {
            name: '鼓楼区',
            id: 122,
            parentId: 12
          },
        ]
      },
      {
        name: '苏州市',
        id: 13,
        parentId: 1
      },
    ]
  }
]

// console.log(bindFindKeys(tree, 122, 'name'))