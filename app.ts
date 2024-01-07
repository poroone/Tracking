/*
 * @Author: poro poroone@163.com
 * @Date: 2024-01-06 01:15:59
 * @LastEditors: poro poroone@163.com
 * @LastEditTime: 2024-01-07 20:24:23
 * @FilePath: \小满zs的课\TR\app.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { State, Options } from "./type/app.type"
import button from "./src/button.js"
import http from "./src/http.js"
import error from "./src/error.js"
import promise from "./src/promise.js"
import connection from "./src/connection.js"
import battery from "./src/battery.js"
export default class Tracker {
    options: Options
    button
    http
    error
    promise
    connection
    battery
    constructor(options: Options) {
        this.options = options
        this.button = button
        this.http = http
        this.error = error
        this.promise = promise
        this.connection = connection
        this.battery = battery

        this.init()
    }
    static version(){
        return "0.0.1"
    }
    // 初始化方法
    init(): void {
        for (let key in this.options) {
            if (this.options[key as keyof typeof this.options] ) {
                this[key as keyof typeof this.options](this.send)
            }

        }
    }
    // 上报
    send(info: Record<any, any>) {
        // 上报 ajax fetch socket sse
        // ajax/fetch可能会丢失 接口没走完浏览器关闭
        // 应为浏览器关闭也会走完
        // 不支持json
        // pin 请求 不想搞很多数据
        // 如果上传数据就会跨域 不支持*
        let blob = new Blob([JSON.stringify(info)], { type: "application/json" })
        navigator.sendBeacon("http://localhost:3000/Tracker", blob)
    }
} 