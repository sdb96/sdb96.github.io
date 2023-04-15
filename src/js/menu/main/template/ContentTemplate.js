class ContentTemplate{

    constructor(templateRootNode, templateEl){
        this.templateRootNode = templateRootNode.cloneNode(true);
        this.templateEl = templateEl;
        this.datas;
        this.node;
    }

    getNodeFromData(datas){
        for(const data of datas){
            //template copy
            const copyTemplate = this.templateEl.cloneNode(true);
            
            //append title
            const titleNode = copyTemplate.querySelector('.template-title');
            const title = data.title;
            const titleIcon = title.icon;
            const titleText = title.text;
            if(title.icon instanceof Node){
                appendNode(titleNode,titleIcon);
            }
            if(typeof title.text === 'string'){appendNode(titleNode,titleText);}

            // //create content
            const content = data.content;
            const contentTargetEl = copyTemplate.querySelector('.template-content')
            for(const item of content){
                const itemNode = this.createItemNode(item); //textNode or orderNode
                appendNode(contentTargetEl,itemNode) 
            }
            
            //append template
            appendNode(this.templateRootNode,copyTemplate);
        }

        this.node = this.templateRootNode;
        return this.node;
    }

    createItemNode(item){
        if(typeof item === 'string'){
            return document.createTextNode(item);
        }

        if(item instanceof Object){
            const matchKey = 'highlite';
            const matchData = item[matchKey];
            const hasProp = Object.hasOwn(item,matchKey);
            if(hasProp){
                const highliteEl = NodeStorage.introduceNode[matchKey].cloneNode(true);
                const highliteTxtNode = document.createTextNode(matchData);
                appendNode(highliteEl,highliteTxtNode);
                return highliteEl;
            }
        }
    }

}