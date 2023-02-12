<template>

  <div class="sort-box" @click="changeSort">
    <div :style="{ cursor: isCursor }">{{ name }}</div>
    <div class="sort-con">
      <div class="s-item" :class="{ active: currentDesc == item.name }" v-for="(item, index) in sortIconList" :key="index">
        <i :class="`iconfont ${item.icon}`"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseSort',
  props: {
    currentDesc: {
      type: String,
      required: true,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    isCursor: {
      type: String,
      default: 'pointer',
    },
  },
  data() {
    return {
      isActive: 0,
      sortIconList: [
        {
          name: 'asc',
          icon: 'icon-shengxu',
        },
        {
          name: 'desc',
          icon: 'icon-jiangxu',
        },
      ],
    }
  },
  methods: {
    changeSort() {
      this.$emit('changeSort', this.currentDesc)
    },
  },
  created() {},
  watch: {},
}
</script>

<style lang="scss" scoped>
.sort-box {
  display: flex;
  align-items: center;
}
.sort-con {
  .s-item {
    cursor: pointer;
    position: relative;

    i {
      font-size: 13px;
    }
    &.active {
      i {
        color: #67e5ff;
      }
    }
  }
  .s-item:first-child {
    height: 14px;
  }
}
</style>
