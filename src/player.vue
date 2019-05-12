<template>
    <div class="vue-videoplayer">
        <div class="vue-videoplayer_video" ref="videowrap"></div>

        <!-- inner component -->
        <span class="vue-videoplayer_time" v-if="!!state">{{state.currentTime}}/{{state.duration}}</span>

        <!-- slot test -->
        <slot :context="context"></slot>
    </div>
</template>

<script>
/**
 * vue video player
 */
 
import VideoBase from 'video-base'; 

export default {
    name: 'VueVideoPlayer',

    props: {
        config: {
            type: Object,
            default: function() {
                return {

                };
            }
        },

        videoData: {
            type: Object,
            default: function() {
                return null;
            }
        }
    },

    data: function() {
        return {
           state: {}
        }
    },

    computed: {
        context: function(){
            return {
                state: this.state,
                video: this._videoBaseIns
            }
        }
    },

    mounted: function() {
        this._videoBaseIns = new VideoBase({
            parent: this.$refs.videowrap,
            config: this.config,
            videoData: this.videoData
        });

        this.state = this._videoBaseIns.getReactiveState();
    },

    methods: {
        
    },

    watch: {
        videoData: {
            handler(videoData, oldVideoData) {
            
            }
        }
    }
}
</script>

<style lang="scss">
$primaryColor:#2aa126; /* 主题色 */
$fontActiveColor:#fff; /* 高亮字体色 */
$fontUnActiveColor:#999; /* 正常字体色 */
$fontDisabledColor:#555; /* 禁用字体色 */
$bgColor:#000;  /* 基础背景色 */  
$bgBarColor:#333;  /* 控制条背景色 */
$bgProgressColor:#555; /* 进度条背景色 */
$bgLightColor:#888;  /* 背景高亮色 */

%basesize{
    width:100%;
    height:100%;
}

.vue-videoplayer{
    position: relative;
    @extend %basesize;
    font-size: 14px;
    font-family: "Arial","Hiragino Sans GB", \5fae\8f6f\96c5\9ed1, "Helvetica", "sans-serif";
    color: $fontUnActiveColor;
    overflow: hidden;
    background: #000;

    &_video{
        position: absolute;
        @extend %basesize;
        z-index:2;
        left: 0;
        top: 0;

        video{
            @extend %basesize;
        }
    }

    &_time{
        z-index: 10;
        position: absolute;
        color: #fff;
        top: 10px;
        left: 50%;
        width: 100px;
        margin-left: -50px;
        line-height: 20px;
        font-size: 16px;
        text-align: center;
    }
}
</style>
