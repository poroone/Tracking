/*
 * @Author: poro poroone@163.com
 * @Date: 2024-01-06 01:56:13
 * @LastEditors: poro poroone@163.com
 * @LastEditTime: 2024-01-07 20:26:08
 * @FilePath: \小满zs的课\TR\server.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import express from "express";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: "163", //163 qq 等
    port: "465",
    auth: {
        user: "",//账号
        pass: ""//密钥
    }
})
const app = express()
app.use(express.json());
app.use((req, res, next) => {
    // 使用 navigator.sendBeacon 必须设置这三个
    res.setHeader("Access-Control-Allow-Origin", "白名单域名")//设置允许跨域的域名
    res.setHeader('Access-Control-Allow-Headers', "Content-Type")//设置请求头
    res.setHeader('Access-Control-Allow-Credentials', "true")//开启跨域
    next()
})

app.post("/Tracker", (req, res) => {
    const body = req.body

    console.log(body)
    if (body.name == "error" ||body.name == "promise") {
        transporter.sendMail({
            from: "",//发送邮箱
            to: "",//目标邮箱
            subject: "错误上报",
            text: JSON.stringify(body)
            

        })
    }
    res.end(" ok !")
})
app.listen(3000, () => {
    console.log("3000")
})