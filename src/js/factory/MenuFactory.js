"use strict"
class MenuFactory{
    constructor(){}
    
    static DefaultComp = new DefaultComp();

    //메뉴영역 nav node > 메뉴의 parent node
    static menuNavEl = document.querySelector("#menu-nav");
    
    static CURRENT_MENU;

    //변경 불가능한 타입으로 지정
    static TYPE = Object.freeze({
        Main : "main",
        Daily:"daily",
        Development : "development",
        Schedule:"schedule",
    });

    static async changeMenu(type){
        this.dispose();
        
        const types = this.TYPE;
        if(types.Main === type){this.CURRENT_MENU = new MainMenu();}
        if(types.Development === type){this.CURRENT_MENU = new DevelopmentMenu();}
        if(types.Schedule === type){this.CURRENT_MENU = new ScheduleMenu();}
        if(types.Daily === type){this.CURRENT_MENU = new DailyMenu();}
        
        // const menu = this.getMenu(type);
        await this.CURRENT_MENU.init();
    }

    static dispose(){
        if(checkValidate(this.MENU)){this.MENU.dispose();}
    }

}