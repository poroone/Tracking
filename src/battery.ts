import { State } from "../type/app.type"
import moment from "moment"
interface BatteryManager {
    level: number
    charging: boolean,
    chargingTime: number
}
declare global {
    interface Navigator {
        getBattery(): Promise<BatteryManager>
    }
}

export default function (send: Function) {
    console.log("navigator" in navigator)
    navigator.getBattery().then(res => {
        console.log(res);
        send({
            name: State.battery,
            value: {
                level: res.level * 100 +'%',
                charging: res.charging,
                chargingTime: res.chargingTime,
                time: moment().format("YYYY-MM-DD HH:mm:ss")
            }
        })
    })

}