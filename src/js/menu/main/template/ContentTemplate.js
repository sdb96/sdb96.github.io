class ContentTemplate{

    constructor(templateRootNode, templateNode){
        this.templateRootNode = templateRootNode.cloneNode(true);
        this.templateNode = templateNode;
        this.node;
        this.type = templateRootNode.getAttribute("type");
    }

    appendData(data){
        //template copy
        const copyTemplate = this.templateNode.cloneNode(true);
        
        //append title
        const titleData = data.title;
        if(checkValidete(titleData)){this.appendTitleNode(copyTemplate,data.title);}
        
        //append content
        const contentData = data.content;
        if(checkValidete(contentData)){this.appendContentNode(copyTemplate,contentData);}
        
        //append template
        appendNode(this.templateRootNode,copyTemplate);

        this.node = this.templateRootNode;
        return this.node;
    }

    appendContentNode(tamplateNode,contentItem){
       const contentTargetEl = tamplateNode.querySelector('.template-content');
       for(const item of contentItem){
           const itemNode = this.createItemNode(item); //textNode or orderNode
           appendNode(contentTargetEl,itemNode) 
       }
   }

    appendTitleNode(tamplateNode,titleItem){
        const titleTargetNode = tamplateNode.querySelector('.template-title-text');
        const textItem = titleItem.text;
        const iconItem = titleItem.icon;
        const periodItem = titleItem.period;

        if(iconItem instanceof Node){appendNode(titleTargetNode,iconItem);}
        if(typeof textItem === 'string'){appendNode(titleTargetNode,textItem);}
        if(checkValidete(periodItem)){
            const periodTargetNode = tamplateNode.querySelector('.template-period');
            appendNode(periodTargetNode,periodItem);
        }
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