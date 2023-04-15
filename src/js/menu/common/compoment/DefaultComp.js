class DefaultComp{
    constructor(){
        this.COMPS = {};
    }

    async init(){
        const headerNavEl = document.querySelector("#header-nav");
        this.COMPS.HEADER = new HeaderComp(headerNavEl);
        
        const footerNavEl = document.querySelector("#footer-nav");
        this.COMPS.FOOTER = new FooterComp(footerNavEl);
        
        for(const COMP in this.COMPS){
            await this.COMPS[COMP].init(document.body);
        }
    }

}