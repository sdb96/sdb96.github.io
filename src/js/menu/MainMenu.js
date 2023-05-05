"use strict"
//메인 메뉴
class MainMenu {
  constructor() {
    this.COMPS = {};
    this.node;
  }

  async init() {
    await this.initComps();

    this.initFloatingMenu();
  }

  initComps() {
    return new Promise(async (resolve) => {
      //ready init component
      this.COMPS.MainMenuComp = new MainMenuComp();
      this.COMPS.IntroduceComp = new IntroduceComp();
      this.COMPS.SkillsComp = new SkillsComp();
      this.COMPS.ExperienceComp = new ExperienceComp();

      const comps = this.COMPS;

      //start components init >> component has element
      await comps.MainMenuComp.init();

      //append els
      this.node = document.querySelector("#menu-nav");
      appendNode(this.node, comps.MainMenuComp.el);

      const introduceNode = this.node.querySelector("#introduce");
      await comps.IntroduceComp.init(introduceNode);

      const skillsNode = this.node.querySelector("#skills");
      await comps.SkillsComp.init(skillsNode);

      const ExperienceNode = this.node.querySelector("#experience");
      await comps.ExperienceComp.init(ExperienceNode);

      resolve(true);
    });
  }

  initFloatingMenu() {
    const titleNodes = document.querySelectorAll(".section-title-content");
    
    const opt = {
      menuNodeList : titleNodes
    };

    this.COMPS.FloatingMenuComp = new FloatingMenu(opt);
  }

  dispose(){
    this.COMPS.FloatingMenuComp.dispose();
  }
}
