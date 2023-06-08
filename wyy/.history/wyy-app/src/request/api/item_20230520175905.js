import service from '..'
export default function getMusicItemList(id) {
    return service({
        method: "GET",
        url: `/playlist/detail?id=${id}`
    })
}