<template>
    <header>
        <div class="top">
            <h1></h1>
            <nav>
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                </ul>
            </nav>
        </div>
        <div class="banner">
            <swiper :options="swiperOption">
                <swiper-slide><img src="http://img4.a0bi.com/upload/ttq/20170427/1493290276452.jpg" alt=""></swiper-slide>
                    <swiper-slide><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538718059286&di=1cb14acc90d6f2616e66d9aeffc9b9d7&imgtype=0&src=http%3A%2F%2Fimg17.3lian.com%2Fd%2Ffile%2F201702%2F22%2F5958ce5e04090456060768c4f58824ee.jpg" alt=""></swiper-slide>
                        <swiper-slide><img src="http://img2.imgtn.bdimg.com/it/u=3496894729,444045397&fm=26&gp=0.jpg" alt=""></swiper-slide>
                            <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
            <div class="personal">
                <h3>个人基本信息</h3>
                <ul>
                    <li>姓名：朱海峰</li>
                    <li>微信：18833527317</li>
                    <li>Q  Q： 601709253</li>
                    <li>手机：18833527317</li>
                    <li>邮箱：18833527317@139.com/18833527317@qq.com</li>
                    <li>GitHub: <a href="https://github.com/zhuhaifeng1251pm">https://github.com/zhuhaifeng1251pm</a></li>
                </ul>
            </div>
        </div>
    </header>
</template>
<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
    name: "headerss",
    components: {
        swiper,
        swiperSlide
    },
    data() {
        return {
            swiperOption: {
                notNextTick: true,
                autoplay: true,
                speed: 1000,
                loop: true,
                grabCursor:true,
                effect:'coverflow',
                pagination: {
                    el: ".swiper-pagination",
                    type: "bullets"
                    },
                    paginationClickable: true          
            }
        };
    }
};
</script>
<style lang="scss" >
header {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px;
    border-radius: 10px;
    position: absolute;
    left:50%;
    margin-left: -600px;
    z-index: 99;
    .top {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 10px;
        h1 {
            background-image: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538718126557&di=d27018d9107979c3e85fb60e64703c8a&imgtype=0&src=http%3A%2F%2Fuploads.xuexila.com%2Fallimg%2F1703%2F859-1F3311J124.jpg);
            background-repeat: no-repeat;
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background-position: center;
            background-size: contain;
        }
        nav{
            width: 600px;
            ul{
                display: flex;
                width: 100%;
                list-style: none;
                height: 80px;
                justify-content: space-between;
                margin: 0;
                padding: 0;
                li{
                    width: 80px;
                   line-height: 80px;
                    border-radius: 50%;
                    text-align: center;
                    background-color: rgba(255, 255, 255, 0.2);
                    color: aquamarine;

                }
                li:hover{
                    background-image: url(http://img1.imgtn.bdimg.com/it/u=2790465936,1434956172&fm=214&gp=0.jpg);
                    background-position: center;
                    background-size:cover;
                    background-repeat: no-repeat;
                    color: lightblue;
                }
                li:nth-child(2){
                    width: 70px;
                    line-height: 70px;
                    align-self: flex-end;
                }
                li:nth-child(3){
                    width: 60px;
                    line-height: 60px;
                    align-self: center;
                }
                 li:nth-child(4){
                    width: 50px;
                    line-height: 50px;
                    align-self: flex-start;
                }
                li:nth-child(5){
                    width: 40px;
                    line-height: 40px;
                    align-self: flex-end;
                }

            }
        }
    }
    .banner {
        width: 100%;
        display: flex;
        .swiper-container {
            width: 800px;
            height: 400px;
            border-radius: 10px;
            margin-left: 0;
            .swiper-wrapper {
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .swiper-pagination{
                width: 50px;
                height: 400px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                .swiper-pagination-bullet{
                    width: 100px;
                    height: 50px;
                    background-color: #fff;
                    border-radius: 0;
                    background-image: url(http://img4.a0bi.com/upload/ttq/20170427/1493290276452.jpg);
                    background-position:center;
                    background-size: 90%;
                    background-repeat: no-repeat;
                }
                .swiper-pagination-bullet:nth-child(2){
                            background-image: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1538718059286&di=1cb14acc90d6f2616e66d9aeffc9b9d7&imgtype=0&src=http%3A%2F%2Fimg17.3lian.com%2Fd%2Ffile%2F201702%2F22%2F5958ce5e04090456060768c4f58824ee.jpg);
                }
                 .swiper-pagination-bullet:nth-child(3){
                    background-image: url(http://img2.imgtn.bdimg.com/it/u=3496894729,444045397&fm=26&gp=0.jpg);
                }

            }
        }
        .personal{
            width: 300px;
            height: 400px;
            background-color: rgba(255,255,255,0.96);
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            box-sizing: border-box;
            padding: 40px 10px 80px 10px;
            h3{
                margin-bottom: 30px;
                font-size: 30px
            }
            ul{
                width: 100%;
                margin: 0;padding: 0;
                list-style: none;
                display: flex;
                flex-direction: column;
                word-break:break-all;
                li{
                    margin:5px;
                    a{
                        color: #000;
                    }
                }
                li:hover{
                    text-decoration: underline;
                    color: aqua;
                }
                li:hover a{
                    color: aqua;
                }
            }
        }
    }
}
</style>

