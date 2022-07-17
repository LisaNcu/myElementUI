<template>
    <teleport
        to="body"
    >
        <div class="el_dialog">
            <div class="el_dialog__content" :style="DialogStyle">
                <slot/>
            </div>
        </div>
    </teleport>
</template>
<script>
export default {
  name:'Dialog',
  props: {
    width: {
        type:String,
        default: '800px'
    },
    DialogStyle: {
      type: Object,
      default: function () {
        return {
            width: '800px',
            height: '400px',
            'background-color': 'white',
            display: 'flex',
            'flex-direction': 'column',
            'justify-content': 'center',
            'align-items': 'center'
        };
      },
    },
  },
  data() {
    return {
    }
  }
}
</script>
<style scoped>
    .el_dialog {
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0;
        padding: 0;
    }
    /* .el_dialog__content {
        width: v-bind(width1);
        height: 400px;
        background-color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    } */
</style>
