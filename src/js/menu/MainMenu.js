//메인 메뉴
class MainMenu{
    constructor(){
        this.COMPS = {};
    }

    async init(){
        
        //ready init component 
        this.COMPS.MainMenuComp = new MainMenuComp();
        this.COMPS.IntroduceComp = new IntroduceComp();
        this.COMPS.SkillsComp = new SkillsComp();
        this.COMPS.ExperienceComp = new ExperienceComp();

        const comps = this.COMPS;

        //start components init >> component has element
        await comps.MainMenuComp.init();

        //append els
        const menuNavNode = document.querySelector('#menu-nav');
        appendNode(menuNavNode,comps.MainMenuComp.el);

        // const introduceNode = menuNavNode.querySelector('#introduce');
        // await comps.IntroduceComp.init(introduceNode);

        // const skillsNode = menuNavNode.querySelector('#skills');
        // await comps.SkillsComp.init(skillsNode);

        const ExperienceNode = menuNavNode.querySelector('#experience');
        await comps.ExperienceComp.init(ExperienceNode);

    }

}