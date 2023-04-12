class IntroduceComp {
    constructor(){
        this.htmlUrl = 'main/introduceTempl.html';
        this.el;
        this.highliteEl='<b class="half-hl">';
        // this.lackEl = ;
        
    }

    async init(){
        this.el = await getFragHtml(this.htmlUrl);
        this.highliteEl = "";
        this.lackEl = "";
        const introduces=[];
        for(const introduceData of introduceDatas){
            introduces.push(new Introduce(introduceData));
        }
        console.log(introduces)


    }

    
}