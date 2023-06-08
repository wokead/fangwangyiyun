import service from '..'

export function getBanner() {
    return service({
        method: "GET",
        url: "banner?type=2"
    })
}

export function getMusicList() {
    return service({
        method: "GET",
        url: "/personalized?limit=10"
    })
}

export function searchMusic(key) {
    return service({
        method: "GET",
        url: `/cloudsearch?keywords=${key}`
    })
}
export function getUser(data) {
    return service({
        method: "GET",
        url: `login?email?phone=${data.account}&password=${data.password}`
    })
}