//하단 컴포넌트
class FooterComp{

    constructor(parentEl){
        this.htmlUrl = "common/footer.html";
        this.parentEl = parentEl;
        this.el;
    }
    
    async init(){
        this.el = await getFragHtml(this.htmlUrl);
        appendNode(this.parentEl,this.el);
    }
}