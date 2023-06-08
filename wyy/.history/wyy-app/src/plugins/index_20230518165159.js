import { Button, Swipe, SwipeItem } from 'vant'
let plugins = [
    Button, Swipe, SwipeItem
]

function getVant(app) {
    plugins.forEach((item) => {
        app.use(item)
    })
}