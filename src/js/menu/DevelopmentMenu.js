//개발메뉴
class DevelopmentMenu{
    constructor(){
        this.COMPS = {};
    }

    async init(){
        this.COMPS.developMenuComp = new DevelopMenuComp();

        for(const COMP in this.COMPS){
            await this.COMPS[COMP].init(document.body);
        }
    }
}