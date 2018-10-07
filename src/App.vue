<template>
    <div class="app">
        <Header />
        <vue-particles color="#dedede" :particleOpacity="0.7" :particlesNumber="80" shapeType="star" :particleSize="4" linesColor="#dedede" :linesWidth="1" :lineLinked="true" :lineOpacity="0.4" :linesDistance="150" :moveSpeed="3" :hoverEffect="true" hoverMode="bubble" :clickEffect="true" clickMode="push">

        </vue-particles>
        <transition name="fade">
            <div class="wrap" v-show="showWrap" v-on:click="closeWrap">
                <h3>朱海峰</h3>
                <p>This is my personal blog.</p>
            </div>
        </transition>
    </div>
</template>
<script>
import Header from "./components/Header";
export default {
    name: "app",
    data: () => ({
        showWrap: true
    }),
    components: {
        Header
    },
    methods: {
        closeWrap() {
            this.showWrap = false;
        }
    }
};
</script>
<style lang="scss" scoped>
.app {
    width: 100%;
    height: 100%;
    // background-size: 100%;
    // background-image: url("./assets/demo-1-bg.jpg");
    // background-size: cover;
    // background-position: center;
    // background-repeat: no-repeat;
    .wrap {
        position: fixed;
        left: 0;
        bottom: 0;
        right: 0;
        top: 0;
        z-index: 99;
        background-color: rgba(0, 0, 0, 0.5);
        animation: show 1s linear;
        color: #fff;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;

        h3 {
            font-size: 100px;
            font-family: "Myname";
            -webkit-animation: neon2 1.5s ease-in-out infinite alternate;
            -moz-animation: neon2 1.5s ease-in-out infinite alternate;
            animation: neon2 1.5s ease-in-out infinite alternate;
        }
        p {
            font-family: "explains";
            -webkit-animation: neon2 1.5s ease-in-out infinite alternate;
            -moz-animation: neon2 1.5s ease-in-out infinite alternate;
            animation: neon2 1.5s ease-in-out infinite alternate;
        }
        .fade-leave-active {
            transition: opacity 0.3s;
        }
        .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
            opacity: 0;
        }
    }

    @keyframes show {
        0% {
            background-color: rgba(0, 0, 0, 1);
        }
        100% {
            background-color: rgba(0, 0, 0, 0.5);
        }
    }
    @font-face {
        font-family: "Myname";
        src: url("http://pcgnine5c.bkt.clouddn.com/Tumbleweed%20MF.eot"),
            url("http://pcgnine5c.bkt.clouddn.com/Tumbleweed%20MF.otf"),
            url("http://pcgnine5c.bkt.clouddn.com/Tumbleweed%20MF.ttf"),
            url("http://pcgnine5c.bkt.clouddn.com/Tumbleweed%20MF.woff");
    }
    @font-face {
        font-family: "explains";
        src: url("http://pcgnine5c.bkt.clouddn.com/CN_tengxiangbodanghang.eot"),
            url("http://pcgnine5c.bkt.clouddn.com/CN_tengxiangbodanghang.ttf"),
            url("http://pcgnine5c.bkt.clouddn.com/CN_tengxiangbodanghang.woff"),
            url("http://pcgnine5c.bkt.clouddn.com/CN_tengxiangbodanghang.otf");
    }
    @-webkit-keyframes neon2 {
        from {
            text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff,
                0 0 40px #228dff, 0 0 70px #228dff, 0 0 80px #228dff,
                0 0 100px #228dff, 0 0 150px #228dff;
        }
        to {
            text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff,
                0 0 20px #228dff, 0 0 35px #228dff, 0 0 40px #228dff,
                0 0 50px #228dff, 0 0 75px #228dff;
        }
    }

    @-moz-keyframes neon2 {
        from {
            text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff,
                0 0 40px #228dff, 0 0 70px #228dff, 0 0 80px #228dff,
                0 0 100px #228dff, 0 0 150px #228dff;
        }
        to {
            text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff,
                0 0 20px #228dff, 0 0 35px #228dff, 0 0 40px #228dff,
                0 0 50px #228dff, 0 0 75px #228dff;
        }
    }
    @keyframes neon2 {
        from {
            text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff,
                0 0 40px #228dff, 0 0 70px #228dff, 0 0 80px #228dff,
                0 0 100px #228dff, 0 0 150px #228dff;
        }
        to {
            text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff,
                0 0 20px #228dff, 0 0 35px #228dff, 0 0 40px #228dff,
                0 0 50px #228dff, 0 0 75px #228dff;
        }
    }
}
//  #particles-js {
//         width: 100%;
//         height: 100%;
//         position: absolute;
//         z-index: -1;
//         top: 0;
//         left: 0;
//         bottom: 0;
//         right: 0;
//     }
</style>

