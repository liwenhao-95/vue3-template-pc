<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getBooks, postBooks, deleteBooks } from './service/index'

const data = ref<any>([])

onMounted(() => {
  getData()
})

const getData = () => {
  getBooks().then((res) => {
    console.log(res, 'res')
    data.value = res
  })
}

const addItem = () => {
  // const params = {
  //   author: 'Paul Barry',
  //   book_name: 'Head-First Python',
  //   description: '帮助读者快速掌握Python编程的基础知识，并使用内置函数和数据结构。'
  // }
  const params = {
    author: '李忠强',
    book_name: '逆天邪神',
    description: '逆天邪神真好看'
  }

  postBooks(params).then(() => {
    getData()
  })
}

const editItem = (row: any) => {
  console.log(row, 'row')
}

const confirm = (row: any) => {
  deleteBooks(row.id).then(() => {
    getData()
  })
  console.log(row, 'row')
}
</script>

<template>
  <div class="home">
    <div class="btns">
      <el-button type="primary" @click="addItem">新增</el-button>
    </div>

    <div class="table">
      <el-table :data="data" style="width: 100%" height="100%">
        <el-table-column prop="id" label="Id" width="80">
          <template #default="{ $index }">
            <span>{{ $index + 1 }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="author" label="作者" />
        <el-table-column prop="book_name" label="书名" />
        <el-table-column prop="description" label="描述" show-overflow-tooltip />
        <el-table-column prop="created_at" label="创建时间" />
        <el-table-column prop="updated_at" label="更新时间" />
        <el-table-column label="操作">
          <template #default="{ row }">
            <!-- <el-button link type="primary" size="small" @click="handleClick"
              >Detail</el-button
            > -->
            <el-button link type="primary" size="small" @click="editItem(row)">编辑</el-button>
            <el-popconfirm title="确认删除吗?" @confirm="confirm(row)">
              <template #reference>
                <el-button link type="danger" size="small">删除</el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination :total="100" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .btns {
    margin-left: auto;
  }
  .table {
    overflow: hidden;
    flex: 1;
  }
  .pagination {
    margin-top: 8px;
  }
}
</style>
