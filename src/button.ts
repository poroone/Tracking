// 不知道有多少按钮
// 不知奥那些按钮上报那些不上报
import moment from "moment"
import {State} from "../type/app.type"
export default function (send:Function) {
    document.addEventListener('click', (e) => {
        console.log(e)
        const target = e.target as HTMLElement;
        const attr=target.getAttribute(State.record)
        const position =target.getBoundingClientRect()
        console.log(position)
        if (target && attr && position) {
            send({
                name:State.button,
                value:{
                    info:attr,
                    x:position.x,
                    y:position.y,
                    agent:navigator.userAgent,
                    time: moment().format("YYYY-MM-DD HH:mm:ss")
                }
            })
        }
    })
}