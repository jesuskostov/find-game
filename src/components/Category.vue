<template>
  <div class="category">
    <button>Футбол</button>
    <button>Баскетбол</button>
    <button>Бадминтонът</button>
    <button>Волейбол</button>
    <button>Други</button>
  </div>
</template>

<script>

export default {
  name: 'Category',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .category {
        display: flex;
        flex-wrap: nowrap;
        margin-top: 30px;
        padding-left: 15px;
        padding-bottom: 30px;
        gap: 12px;
        overflow-x: scroll;
        button {
            border: 0;
            border-radius: 999px;
            padding: 2px 25px;
            font-size: 14px;
            color: #fff;
            background: rgb(25,198,55);
            background: linear-gradient(45deg, rgba(25,198,55,1) 0%, rgba(211,237,39,1) 100%);
            -webkit-box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.2);
            -moz-box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.2);
            box-shadow: 0px 5px 15px 0px rgba(0,0,0,0.2);
        }
    }

</style>
