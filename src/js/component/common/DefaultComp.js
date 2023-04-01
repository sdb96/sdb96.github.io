class DefaultComp{
    constructor(){
        this.COMPS = {};
    }

    async init(){
        this.COMPS.HEADER = new HeaderComp();
        this.COMPS.FOOTER = new FooterComp();
        for(const COMP in this.COMPS){
            await this.COMPS[COMP].init(document.body);
        }
    }

}