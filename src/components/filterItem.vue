<template>
    <span class="filter-item" @click="toggle" :class="{selected:rangeObject.selected}">{{rangeObject.value}}</span>
</template>

<script>

export default {
  name: "filterItem",
  props: {
    rangeObject: {
      required: true,
      type: Object
    },
    index: {
      required: true
    },
    catagory: {
      required: true,
      type: String
    }
  },
  data: function() {
    return {
      flag: false
    };
  },
  created: function() {
    this.flag = this.rangeObject.selected;
  },
  methods: {
    toggle: function() {
      if (this.catagory == "专业层次") {
        this.$store.commit("operationMajor", {
          index: this.index,
          selected: !this.rangeObject.selected
        });
      }

      if (this.catagory == "高校层次") {
        this.$store.commit("operationSchoolRange", {
          index: this.index,
          selected: !this.rangeObject.selected
        });
      }

      if (this.catagory == "高校地区") {
        this.$store.commit("operationSchoolArea", {
          index: this.index,
          selected: !this.rangeObject.selected
        });
      }
    }
  }
};
</script>

<style scoped>
.filter-item {
  display: inline-block;
  min-width: 70px;
  padding: 0 9px;
  height: 35px;
  color: #333333;
  text-align: center;
  line-height: 35px;
  margin: 5px;
  cursor: pointer;
}

.filter-item.selected {
  background: rgba(0, 160, 92, 1);
  color: #fff;
}
.filter-item:hover {
  background: rgba(0, 160, 92, 1);
  color: #fff;
}
</style>
