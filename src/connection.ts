/*
 * @Author: poro poroone@163.com
 * @Date: 2024-01-07 18:07:49
 * @LastEditors: poro poroone@163.com
 * @LastEditTime: 2024-01-07 18:23:52
 * @FilePath: \小满zs的课\TR\src\connection.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { State } from "../type/app.type";
import moment from "moment";


declare global {
    interface Navigator {
        connection: any
    }
}

export default function (send: Function) {
    console.log

    send({
        name: State.connection,
        value: {
            effectiveType:navigator.connection.effectiveType,
            rtt:navigator.connection.rtt
        }

    })
}
