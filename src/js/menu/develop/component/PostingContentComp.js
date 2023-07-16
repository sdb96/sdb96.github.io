"use strict"
//개발메뉴 컴포넌트
class PostingContentComp{

    constructor(){
        // this.htmlUrl = "menu/develop/PostingContentComp.html";
        this.POSTING_MANAGER = new PostingManager();
        this.el = MenuFactory.CURRENT_MENU.el.querySelector("#develop-content");
    }
    
    async init(){
        // this.POSTING_MANAGER.searchPostingItem();
        // this.POSTING_MANAGER.
        // this.addEvent();
    }

}