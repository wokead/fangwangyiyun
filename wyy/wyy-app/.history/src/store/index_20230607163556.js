import { getUser } from '@/request/api/home'
import { getMusicLyrics } from '@/request/api/item'
import { createStore } from 'vuex'

export default createStore({
    state: {
        playList: [{
            al: {
                id: 35313032,
                pic: 109951166580198690,
                picUrl: "https://p2.music.126.net/MPhzdLs1oleS5Mh_iNuHLA==/109951166580198690.jpg",
                pic_str: "109951166580198690",
            },
            id: 467952048,
            name: "男孩",
            ar: [{
                name: "梁博"
            }]
        }],
        playListIndex: 0,
        isPlay: false,
        detailShow: false,
        lyricsList: {},
        currentTime: 0,
        duration: 0,
        isLogin: false,
        token: ''
    },
    getters: {},
    mutations: {
        updateIsPlay: function(state) {
            state.isPlay = !state.isPlay
        },
        updatePlayList: function(state, value) {
            state.playList = value
        },
        updatePlayListIndex: function(state, value) {
            state.playListIndex = value
        },
        updateDetailShow: function(state) {
            state.detailShow = !state.detailShow
        },
        updateLyricsList: function(state, value) {
            state.lyricsList = value
        },
        updateCurrentTime: function(state, value) {
            state.currentTime = value
        },
        updateDuration: function(state, value) {
            state.duration = value
        },
        pushIntoPlayList: function(state, value) {
            state.playList.push(value)
        },
        updateLoginInfo: function(state) {
            state.isLogin = !state.isLogin
        },
        updateToken: function(state, value) {
            state.token = value
        }
    },
    actions: {
        getLyrics: async function(context, value) {
            let res = await getMusicLyrics(value)
            context.commit("updateLyricsList", res.data.lrc)
        },
        getUserInfo: async function(context, value) {
            let res = await getUser(value)
            return res
        }
    },
    modules: {}
})