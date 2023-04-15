//일기 컴포넌트
class DailyMenuComp{

    constructor(){
        this.htmlUrl = "menu/daily/dailyMenu.html";
        this.el;
    }
    
    async init(){
        this.el = await getFragHtml(this.htmlUrl);
        appendNode(MenuFactory.menuNavEl,this.el);
        // this.addEvent();
    }
}