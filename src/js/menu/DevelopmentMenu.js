"use strict"
//개발메뉴
class DevelopmentMenu{
    constructor(){
        this.COMPS = {};
        this.htmlUrl = "menu/develop/developmentMenu.html";
        this.menuEl;
        this.el;
    }

    async init(){
        //append El
        this.menuEl = document.querySelector("#menu-nav");
        this.el = await getFragHtml(this.htmlUrl);
        appendNode(this.menuEl,this.el);

        //contruct Components
        this.COMPS.PostingContentComp = new PostingContentComp();
        // this.COMPS.PostingSearchComp = new PostingSearchComp();
        this.COMPS.SideMenuComp = new SideMenuComp();
        
        for(const COMP in this.COMPS){
            await this.COMPS[COMP].init(document.body);
        }
    }

    dispose(){
        
    }
}