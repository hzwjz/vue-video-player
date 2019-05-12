<template>
    <div class="a-index">
        <VideoPlayer :videoData="videoData" :config="config">
            
        </VideoPlayer>
    </div>
</template>

<style lang="scss" scoped>
html,body{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}

body{
    min-width: 1000px;
    background: #fff;
}  

.a-index{
    position: relative;
    height: 300px;

    
}
</style>

<script>
import VideoPlayer from '@/player';

export default {
    name: 'ExampleApp',

    data: function() {
        return {
            videoData: {
                quality:1,
                format:'mp4',
                // url:'https://www.w3cschool.cn/statics/demosource/mov_bbb.mp4'
                url: 'http://jdvodluwytr3t.vod.126.net/jdvodluwytr3t/nos/mp4/2018/08/24/1006821004_16e7c42217d6477cb0ad01360930b694_sd.mp4'
            },
            config: {
                autoStart: !0
            }
        }
    },

    components: {
        'VideoPlayer': VideoPlayer
    },

    methods: {
        
    }
}
</script>
