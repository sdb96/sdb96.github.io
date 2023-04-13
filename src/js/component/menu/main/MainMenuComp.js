//메인메뉴 컴포넌트
class MainMenuComp{

    constructor(){
        this.htmlUrl = "menu/main/mainMenu.html";
        this.el;
    }
    
    async init(){
        this.el = await getFragHtml(this.htmlUrl);
        // appendNode(MenuFactory.menuNavEl,this.el);
        // this.addEvent();
    }
}