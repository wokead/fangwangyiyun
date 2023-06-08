import service from '..'
export default function getMusicList(id) {
    return service({
        method: "GET",
        url: `/playlist/detail?id=${id}`
    })
}