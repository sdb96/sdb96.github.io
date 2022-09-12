import Header from "./Header.js";


interface domKeyInterface {
    [prop:string]: any;
}
export default class Index{
    constructor() {
        const domObjs:domKeyInterface = {
            HEADER:new Header(),
            SIDE : "",
        };
        //DOM init
        const domKeys = Object.keys(domObjs);
        domKeys.forEach( async(domKey:string)=>{
            const domObj = domObjs[domKey];
            if(domObj instanceof Object){
                await domObjs[domKey].initHtml();
            }
        });
    }
}
new Index();