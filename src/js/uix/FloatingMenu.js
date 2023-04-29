class FloatingMenu{
    constructor(opt){
        
        this.node;

        const defaultOpt = {
            width:'10em',
            height:'10em',
            position:'absolute',
            backgroundColor: "#3498db",
            textColor: "#ffffff",
            "z-index" : 999
        }
        this.option = Object.assign(defaultOpt,opt);

        this.init();
    }

    init(){
        //make Node
        this.node = createEl({
            tagName:'div',
            class:'floating-banner'
        });

        //init option Style
        for(const opt in this.option){
            this.node.style[opt] = this.option[opt];
        }



    }

}