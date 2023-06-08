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
        url: "/personalized?limit=1"
    })
}