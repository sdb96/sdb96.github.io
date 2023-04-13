class IntroduceComp {
    constructor(){
        this.htmlUrl = 'menu/main/introduceTempl.html';
        this.el = createEl({tagName:'ul'}); //루트
        this.highliteEl = NodeStore.introduceNode.highlite;
        
        // this.lackEl = ;
        
    }

    async init(){
        const templateEl = await getFragHtml(this.htmlUrl);
        
        //create Introduce Object
        const introduces=[];
        for(const introduceData of introduceDatas){
            introduces.push(new Introduce(introduceData));
        }
        
        //append logic
        for(let introduce of introduces){
            //template copy
            const copyTemplate = templateEl.cloneNode(true);
            
            //create title and append title TextNode
            const titleTxt = introduce.title;
            const titleTxtNode = document.createTextNode(titleTxt);
            const titleTargetEl = copyTemplate.querySelector('.introduce-item');
            appendNode(titleTargetEl,titleTxtNode);

            //create content
            const content = introduce.content;
            const contentTargetEl = copyTemplate.querySelector('.introduce-content')
            for(const item of content){
                const itemEl = this.makeItemEl(item); //textNode or orderNode
                appendNode(contentTargetEl,itemEl) 
            }

            appendNode(this.el,copyTemplate);
        }
    }

    makeItemEl(item){
        if(typeof item === 'string'){
            return document.createTextNode(item);
        }

        if(item instanceof Object){
            const matchKey = 'highlite';
            const matchData = item[matchKey];
            const hasProp = Object.hasOwn(item,matchKey);
            if(hasProp){
                const highliteEl = this.highliteEl.cloneNode(true);
                const highliteTxtNode = document.createTextNode(matchData);
                appendNode(highliteEl,highliteTxtNode);
                return highliteEl;
            }
        }
    }

    
}