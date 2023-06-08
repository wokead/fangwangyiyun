import { createStore } from 'vuex'

export default createStore({
    state: {
        playList: [{
            al: {
                id: 35313032,
                name: "男孩",
                pic: 109951166580198690,
                picUrl: "https://p2.music.126.net/MPhzdLs1oleS5Mh_iNuHLA==/109951166580198690.jpg",
                pic_str: "109951166580198690",
            },
            id: 467952048,
        }],
        playListIndex: 0,
        isPlay: false
    },
    getters: {},
    mutations: {
        updateIsPlay: function(state, value) {
            state.isPlay = value
        }
    },
    actions: {},
    modules: {}
})