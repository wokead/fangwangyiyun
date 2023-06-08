import { Button, Swipe, SwipeItem, Popup, Form, Field, CellGroup } from 'vant'
let plugins = [
    Button, Swipe, SwipeItem, Popup, Form, Field, CellGroup
]

export default function getVant(app) {
    plugins.forEach((item) => {
        app.use(item)
    })
}