import service from '..'
export function getMusicItemList(id) {
    return service({
        method: "GET",
        url: `/playlist/detail?id=${id}`
    })
}

export function getMusicItemList(id) {
    return service({
        method: "GET",
        url: `/playlist/track/all?id=243816&limit=10`
    })
}