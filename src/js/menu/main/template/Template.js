class Template{

    /**
     * 
     * @typedef {Object} {} template Option
     * @property {Node} templateNode
     */
    
    constructor(opt){
        this.templateNode = opt.templateNode;
        this.contnetLoopNode = opt.contnetLoopNode;
        this.node;
    }

    appendData(data){
        //template copy
        const copyTemplate = this.templateNode.cloneNode(true);
        
        //content 
        if(data instanceof Array){
            //append title
            const titleData = data.title;
            if(checkValidete(titleData)){this.appendTitleNode(copyTemplate,data.title);}
            
            //append content
            const contentData = data.content;
            if(checkValidete(contentData)){this.appendContentNode(copyTemplate,contentData);}
        }
        //title
        else if(data instanceof Object){
            for(const key in data){
                const item = data[key];

                if(key === 'title'){
                    const titleNode = this.templateNode.querySelector('.template-title-text');
                    this.appendTitleNode(titleNode,item);
                }else{
                    const itemNode = this.createItemNode(item);
                    appendNode(this.templateNode,itemNode);
                }

            }
        }

        

        // //append title
        // const titleData = data.title;
        // if(checkValidete(titleData)){this.appendTitleNode(copyTemplate,data.title);}
        
        // //append content
        // const contentData = data.content;
        // if(checkValidete(contentData)){this.appendContentNode(copyTemplate,contentData);}
        
        //append template
        // appendNode(this.templateRootNode,copyTemplate);

        this.node = this.templateNode;
    }

    appendContentNode(contentItem,loopNode){
       const contentTargetEl = this.templateNode.querySelector('[template-role=content-items]');
       const hasLoopNode = checkValidete(loopNode);
       
       for(const item of contentItem){
            let itemNode = this.createItemNode(item); //textNode or orderNode

            if(hasLoopNode){
                const cloneLoopNode = loopNode.cloneNode(true);
                appendNode(cloneLoopNode,itemNode);
                itemNode = cloneLoopNode;
            }
            appendNode(contentTargetEl,itemNode);
       }
   }

    appendTitleNode(titleItem){
        const titleTargetNode = this.templateNode.querySelector('[template-role=title-text]');
        const textItem = titleItem.text;
        const iconItem = titleItem.icon;
        const periodItem = titleItem.period;

        if(iconItem instanceof Node){appendNode(titleTargetNode,iconItem);}
        if(typeof textItem === 'string'){appendNode(titleTargetNode,textItem);}
        if(checkValidete(periodItem)){
            const periodTargetNode = this.templateNode.querySelector('[template-role=title-period]');
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