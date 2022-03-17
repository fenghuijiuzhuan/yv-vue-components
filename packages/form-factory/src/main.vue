<template>
  <el-form
    ref="form"
    :model="params"
    :inline="true"
    class="yv-form-factory__wrapper"
  >
    <template v-if="dateRange">
      <el-form-item label="检查时间" class="yv-form-factory__date-range">
        <el-form-item
          label=""
          :prop="dateRangeOption[0].key"
          style="margin-right: 0"
        >
          <el-date-picker
            placeholder="请选择日期"
            suffix-icon="el-icon-date"
            type="date"
            value-format="yyyy-MM-dd"
            v-model="params[dateRangeOption[0].key]"
          >
          </el-date-picker>
        </el-form-item>
        <span>至</span>
        <el-form-item
          label=""
          :prop="dateRangeOption[1].key"
        >
          <el-date-picker
            placeholder="请选择日期"
            suffix-icon="el-icon-date"
            type="date"
            value-format="yyyy-MM-dd"
            v-model="params[dateRangeOption[1].key]"
          >
          </el-date-picker>
        </el-form-item>
      </el-form-item>
    </template>

    <template v-if="select">
      <el-form-item
        v-for="(selector, sindex) in selectors"
        :key="sindex"
        :label="selector.label || ''"
      >
        <el-select
          v-model="params[selector.key]"
          :placeholder="selector.placeholder || '全部分类'"
          clearable
          style="width: 178px"
          @change="handleQuery"
        >
          <el-option
            v-for="(item, index) in selector.options"
            :key="item.value + '' + index"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </el-form-item>
    </template>

    <el-form-item v-if="submit || reset">
      <el-button v-if="submit" type="primary" round @click="handleQuery">
        筛选
      </el-button>
      <el-button v-if="reset" type="primary" round @click="handleReset">
        重置
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'YvFormFactory',
  props: {
    dateRange: [Boolean, Array],
    select: [Boolean, Array],
    submit: Boolean,
    reset: Boolean
  },
  data() {
    return {
      params: {}
    };
  },
  computed: {
    dateRangeOption() {
      if (!this.dateRange) return [];
      if (Array.isArray(this.dateRange)) {
        return this.dateRange;
      }
      return [
        {
          key: 'beginTime',
          value: ''
        },
        {
          key: 'endTime',
          value: ''
        }
      ];
    },
    selectors() {
      if (!this.select) return [];
      if (Array.isArray(this.select)) {
        return this.select;
      }
      return [
        {
          key: 'type',
          options: [
            { value: 1, label: '选项1' },
            { value: 2, label: '选项2' },
            { value: 3, label: '选项3' }
          ]
        }
      ];
    },
    queryParams() {
      return this.params;
    }
  },
  mounted() {
    this.dateRangeOption.forEach((cur) => {
      this.$set(this.params, cur.key, cur.value);
    });
    this.selectors.forEach((cur) => {
      this.$set(this.params, cur.key, cur.value);
    });
  },
  methods: {
    // 查询
    handleQuery() {
      this.$emit('on-query', this.queryParams);
    },
    // 重置
    handleReset() {
      let vm = this;
      vm.$refs.form.resetFields();
      this.$emit('on-query', this.queryParams);
    }
  }
};
</script>
