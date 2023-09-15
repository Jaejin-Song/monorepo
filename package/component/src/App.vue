<template>
  <d-button>Button Title</d-button>

  <br>
  <span class="header-01">세상에 이런 폰트가 나오다니 천재인듯</span>
  <br>
  <span class="header-03">세상에 이런 폰트가 나오다니 천재인듯</span>
  <br>
  <br>

  <Table :columns="columns" :data-source="data">
    <template #headerCell="{ column }">
      <template v-if="column.key === 'name'">
        <span> Name </span>
      </template>
    </template>

    <template #bodyCell="{ column }">
      <template v-if="column.key === 'action'">
        <UploadDragger>
          <p class="ant-upload-drag-icon">
            <inbox-outlined :style="{ fontSize: '18px' }" class="icon-test"></inbox-outlined>
          </p>
        </UploadDragger>
      </template>
    </template>
  </Table>

  <PageHeader style="border: 1px solid rgb(235, 237, 240)" title="test Title" sub-title="This is a subtitle" />
</template>
<script lang="ts" setup>
import { Table, UploadDragger, PageHeader } from "ant-design-vue";
import { InboxOutlined } from "@ant-design/icons-vue";
const columns = [
  {
    name: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
  },
  {
    title: "Action",
    key: "action",
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
</script>
<style lang="scss">
.ant-upload .ant-upload-btn {
  padding: 0px !important;
}

.ant-upload-drag-icon {
  margin: 8px !important;
}

// .test {
//   font-family: Pretendard;
//   font-weight: 900;
//   font-size: 32px;
// }
</style>
