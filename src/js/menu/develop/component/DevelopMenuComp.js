"use strict"
//개발메뉴 컴포넌트
class DevelopMenuComp{

    constructor(){
        this.htmlUrl = "menu/develop/developMenu.html";
        this.el;
    }
    
    async init(){
        this.el = await getFragHtml(this.htmlUrl);
        appendNode(MenuFactory.menuNavEl,this.el);
        // this.addEvent();
    }
}