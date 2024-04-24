<script setup lang="ts">
import { ElMessage } from 'element-plus'
import { onMounted, ref } from 'vue'
import { getAlbums, postAlbums } from './service/index'

const data = ref([])

onMounted(() => {
  getData()
})

const getData = () => {
  getAlbums().then((res: any) => {
    console.log(res, 'res')
    data.value = res
  })
}

const addItem = async () => {
  ElMessage('This is a message.')
  const params = {
    id: '4',
    title: 'The Modern Sound of Betty Carter',
    artist: 'Betty Carter',
    price: 49.99
  }
  const res = await postAlbums(params)
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
      <el-table-column prop="artist" label="Artist" />
      <el-table-column prop="title" label="Title" />
      <el-table-column prop="price" label="Price" />
      <el-table-column label="Operations">
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
