import service from '..'

function getBanner() {
    return service({
        method: "GET",
        url: "banner?type=2"
    })
}