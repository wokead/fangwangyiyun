import service from '..'

export function getBanner() {
    return service({
        method: "GET",
        url: "banner?type=2"
    })
}

export function getMusicList() {

}