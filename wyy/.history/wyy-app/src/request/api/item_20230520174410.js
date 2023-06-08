import service from '..'
export default function getMusicList(data) {
    return service({
        method: "GET",
        url: `/playlist/detail?id=${data.id}`
    })
}