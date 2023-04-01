
class MenuFactory{
    constructor(){};
    
    //변경 불가능한 타입으로 지정
    static TYPE = Object.freeze({
        Main : "main",
        Daily:"daily",
        Development : "development",
        Schedule:"schedule",
    });

    //TYPE에 일치하는 메뉴 return
    static getMenu(type){
        const types = this.TYPE;
        if(types.Main === type){this.MENU = new MainMenu();}
        if(types.Development === type){this.MENU = new DevelopmentMenu();}
        if(types.Schedule === type){this.MENU = new ScheduleMenu();}
        if(types.Daily === type){this.MENU = new DailyMenu();}
        return this.MENU;
    }

    static async changeMenu(type){
        const menu = this.getMenu(type);
        console.log(type)
        await menu.init();
    }

}

