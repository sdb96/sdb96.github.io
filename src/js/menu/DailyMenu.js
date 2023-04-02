//일기메뉴
class DailyMenu{
    constructor(){
        this.COMPS = {};
    }

    async init(){
        this.COMPS.DailyMenuComp = new DailyMenuComp();

        for(const COMP in this.COMPS){
            await this.COMPS[COMP].init(document.body);
        }
    }
}