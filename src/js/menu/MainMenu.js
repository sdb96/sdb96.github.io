//메인 메뉴
class MainMenu{
    constructor(){
        this.COMPS = {};
    }

    async init(){
        const menuNavEl = document.querySelector("#menu-nav");
        this.COMPS.MainMenuComp = new MainMenuComp(menuNavEl);

        for(const COMP in this.COMPS){
            await this.COMPS[COMP].init(document.body);
        }
    }

}