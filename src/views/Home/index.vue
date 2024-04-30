<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { getBooks, postBooks } from './service/index'

const data = ref([])

onMounted(() => {
  getData()
})

const getData = () => {
  getBooks().then((res: any) => {
    console.log(res, 'res')
    data.value = res
  })
}

const addItem = async () => {
  const params = {
    // id: '4',
    // title: 'The Modern Sound of Betty Carter',
    // artist: 'Betty Carter',
    // price: 49.99
    author: 'Paul Barry',
    book_name: 'Head-First Python',
    descrip: '帮助读者快速掌握Python编程的基础知识，并使用内置函数和数据结构。'
  }
  const res = await postBooks(params)
  if (res) {
    getData()
  }
}

const editItem = (row: any) => {
  console.log(row, 'row')
}
</script>

<template>
  <div class="home">
    <el-button type="primary" @click="addItem">新增</el-button>
    <el-button type="success">success</el-button>
    <el-button type="warning">warning</el-button>
    <el-button type="danger">danger</el-button>
    <el-button type="info">info</el-button>
    <el-button>custom-button</el-button>

    <el-table :data="data" style="width: 100%">
      <el-table-column prop="id" label="Id" width="180" />
      <el-table-column prop="author" label="作者" />
      <el-table-column prop="book_name" label="书名" />
      <el-table-column prop="describ" label="描述" show-overflow-tooltip />
      <el-table-column label="操作">
        <template #default="{ row }">
          <!-- <el-button link type="primary" size="small" @click="handleClick"
            >Detail</el-button
          > -->
          <el-button link type="primary" size="small" @click="editItem(row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination :total="100" />
  </div>
</template>
