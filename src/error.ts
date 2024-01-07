import { State } from "../type/app.type";
import moment from "moment"
export default function (send:Function){
    window.addEventListener("error",e =>{
        console.log(e)
        send({
            name:State.error,
            value:{
                msg:e.message, //报的什么错
                line:e.lineno, //第几行报的错
                filename:e.filename, //那个文件报错了
                time: moment().format("YYYY-MM-DD HH:mm:ss")
            }
        })
    })
}
