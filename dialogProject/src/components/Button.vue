<template>
    <button
    class="el-button"
    :class="[
        size ? `el-button--${size}`:'',
        type ? `el-button--${type}`:''
    ]"
    >
        <slot/>
    </button>
</template>
<script>
export default {
    name: 'Button',
    props: {
        size: {
            type: String,
            default: 'medium'
        },
        type: {
            type: String,
            default: 'primary'
        }
    },
    data() {
        return {

        }
    },
    mounted() {
        console.log('size', this.size)
        console.log('type', this.type)
    }
}
</script>
<style scoped lang="less">
@import url('../style/mixin.less');
    .el-button {
        display: inline-block;
        line-height: 1;
        cursor: pointer;
        white-space: nowrap;
        //background: @--button-default-background-color;
        //color: @--button-default-font-color;
        -webkit-appearance: none;
        text-align: center;
        outline: none;
        border: @--border-base;
        border-color: @--button-default-border-color;
        box-sizing: border-box;
        margin: 0;
        font-weight: @--button-font-weight;
        & + & {
            margin-left: 10px;
        }
    }
    
    .el-button--primary {
        .button-variant(
            @--button-primary-font-color,
            @--button-primary-background-color,
            @--button-primary-border-color
        );
    }
    .el-button--success {
        .button-variant(
            @--button-success-font-color,
            @--button-success-background-color,
            @--button-success-border-color
        );
    }
    .el-button--danger {
        .button-variant(
            @--button-danger-font-color,
            @--button-danger-background-color,
            @--button-danger-border-color
        )
    }

    .el-button--small {
        .button-size(
            @--button-small-padding-vertical,
            @--button-small-padding-horizontal,
            @--button-small-font-size,
            @--button-small-border-radius
        );
    }
    .el-button--medium {
        .button-size(
            @--button-medium-padding-vertical,
            @--button-medium-padding-horizontal,
            @--button-medium-font-size,
            @--button-medium-border-radius
        );
    }
    .el-button--large {
        .button-size(
            @--button-large-padding-vertical,
            @--button-large-padding-horizontal,
            @--button-large-font-size,
            @--button-large-border-radius
        );
    }
</style>