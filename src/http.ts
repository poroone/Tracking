/*
 * @Author: poro poroone@163.com
 * @Date: 2024-01-07 00:19:57
 * @LastEditors: poro poroone@163.com
 * @LastEditTime: 2024-01-07 01:24:32
 * @FilePath: \poroone\TR\src\http.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { State } from "../type/app.type"
import moment from "moment"
export default function (send: Function) {
    const originXHROpen = XMLHttpRequest.prototype.open
    XMLHttpRequest.prototype.open = function (method: string, url: string, async: boolean = true) {
        send({
            name: State.http,
            value: {
                method, url,
                time: moment().format("YYYY-MM-DD HH:mm:ss")
            }
        })

        originXHROpen.call(this, method, url, async)
    }
    
    const originXhrSend = XMLHttpRequest.prototype.send
    XMLHttpRequest.prototype.send = function (body: any) {
        send({
            name: State.http,
            value: {
                body,
                time: moment().format("YYYY-MM-DD HH:mm:ss")
            }
        })
        console.log(body)
        originXhrSend.call(this, body)
    }
}