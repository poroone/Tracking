/*
 * @Author: poro poroone@163.com
 * @Date: 2024-01-07 17:01:20
 * @LastEditors: poro poroone@163.com
 * @LastEditTime: 2024-01-07 17:55:37
 * @FilePath: \小满zs的课\TR\src\promise.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { State } from "../type/app.type"
import moment from "moment"
export default function (send: Function) {
    window.addEventListener("unhandledrejection", e => {
        console.log(e,"promise")
        send({
            name:State.promise,
            value:e.reason,
        
            time:moment().format("YYYY-MM-DD HH:MM:SS")
               
        })
    })
}