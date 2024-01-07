
import { defineConfig } from "vite"
// webpack不适合制库 webpack只适合和打包项目
// 开发sdk插件 rollup vite比较适合
// 大包出来的体积比我webpack要小
export default defineConfig({
    build: { 
        // 打包成一个库
         lib:{
            name:'Tracker',
            entry:"./app.ts",//入口文件
         },
        //  里面的配置和rollup一样的
         rollupOptions:{
            output:[
                {
                    name:"Tracker",
                    dir:"dist",
                    entryFileNames:'Tracker.umd.js',
                    format:"umd"
                }, {
                    name:"Tracker",
                    dir:"dist",
                    entryFileNames:'Tracker.cjs.js',
                    format:"commonjs"
                }, {
                    name:"Tracker",
                    dir:"dist",
                    entryFileNames:'Tracker.esm.js',
                    format:"esm"
                }, {
                    name:"Tracker",
                    dir:"dist",
                    entryFileNames:'Tracker.iife.js',
                    format:"iife"
                }
            ]
         }
    } 
})