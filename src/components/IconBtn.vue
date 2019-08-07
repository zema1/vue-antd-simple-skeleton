<template>
  <div style="display: inline-block; margin-right: 5px;">
    <a-tooltip placement="top">
      <template slot="title">
        <span>{{name}}</span>
      </template>
      <a-button :icon="icon"/>
    </a-tooltip>
  </div>
</template>

<script>
  export default {
    name: 'IconBtn',
    props: {
      name: {
        type: String,
        required: true
      },
      icon: {
        type: String,
        required: true
      }
    }
  };
</script>
