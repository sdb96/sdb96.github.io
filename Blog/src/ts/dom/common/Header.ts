import XhrUtil from "../../utils/XhrUtil.js";
import DomUtil from "../../utils/DomUtil.js";
export default class header implements CommonHtml{

    public el: Element | null | undefined;

    constructor(){
    }

    initHtml(): Promise<void> {
        const opt = {METHOD:"GET",URL:"/Blog/src/html/common/header.html"};
        return new Promise((resolve)=>{
            XhrUtil.request(opt).then((html)=>{
                this.el = DomUtil.makeEl(html);
                resolve();
            });
        });
    }
}