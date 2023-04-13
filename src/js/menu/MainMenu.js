//메인 메뉴
class MainMenu{
    constructor(){
        this.COMPS = {};
    }

    async init(){
        
        //ready init component 
        this.COMPS.MainMenuComp = new MainMenuComp();
        this.COMPS.IntroduceComp = new IntroduceComp();
        
        //start components init >> component has element
        const comps = this.COMPS;
        const initComps = [];
        for(const comp in comps){
            initComps.push(comps[comp].init());
        }
        await Promise.all(initComps);

        //append els
        const menuNavEl = document.querySelector('#menu-nav');
        appendNode(menuNavEl,comps.MainMenuComp.el);

        const introduceEl = document.querySelector('#introduce');
        appendNode(introduceEl,comps.IntroduceComp.el);

    }

}