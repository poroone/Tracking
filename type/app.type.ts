/*
 * @Author: poro poroone@163.com
 * @Date: 2024-01-06 14:26:19
 * @LastEditors: poro poroone@163.com
 * @LastEditTime: 2024-01-07 20:19:05
 * @FilePath: \小满zs的课\TR\type\app.type.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export interface Options {
    http: boolean //是否上报ajax的信息 请求
    error: boolean //是否上报代码报错信息 报错
    promise: boolean //promise报错的信息 promise报错
    // onepage: boolean //首屏渲染时间 是否上报
    button: boolean, //是否上报button点击 按钮上报
    connection : boolean, //是否上报connection  网络
    battery:boolean //是否上报battery  电池
}

export enum State {
    http = "http",
    error = "error",
    promise = "promise",
    // onepage = "onepage",
    button = "button",
    record="po-tracker",
    connection = "connection",
    battery="battery"
}