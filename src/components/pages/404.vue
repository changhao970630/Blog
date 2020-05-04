<template>
    <div id="not_found">
        <h1>
            <span>4</span>
            <span>0</span>
            <span>4</span>
            <span>N</span>
            <span>O</span>
            <span>T</span>
            <span>F</span>
            <span>O</span>
            <span>U</span>
            <span>N</span>
            <span>D</span>
        </h1>
    </div>
</template>

<script>
export default {
    name: "not_found"
};
</script>

<style lang="less" scoped>
#not_found {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
        text-align: center;
        font-size: 5rem;
        span {
            color: red;
            display: inline-block;
            position: relative;
        }
        span:nth-of-type(2n+1) {
            color: cornflowerblue;
        }
        span:after {
            display: block;
            width: 0%;
            height: 100%;
            background-color: red;
            background: rgba(255, 255, 255, 1);
            position: absolute;
            left: 0;
            top: 0;
            content: '';
            animation: showHidden 4s ease-in infinite alternate-reverse;
        }
        @keyframes showHidden {
            0% {
                width: 0%;
                height: 0%;
            }
            50% {
                width: 100%;
                height: 100%;
            }
            100% {
                width: 0%;
                height: 0%;
            }
        }
    }
}
</style>