class Template{

    constructor(templateNode){
        // this.rootNode = createEl({tagName:'template'});
        this.templateNode = templateNode;
        this.loopNode = this.templateNode.querySelector('[template-role=loop]');
        this.loopParentNode;
        this.hasLoopNode = false;
        this.node;
        
        if(checkValidete(this.loopNode)){
            this.hasLoopNode = true;
            this.loopParentNode = this.loopNode.parentNode;
            //template 에 포함된 loop node 제거
            this.templateNode.querySelector('[template-role=loop]').remove();
        }
        // appendNode(this.rootNode,this.templateNode);
    }

    appendData(datas){
        //순환구조로 object 일 경우랑 배열인 경우를 따져서?
        
        // data.title  title 로직 >> loop안에 title이 있는경우와 
        // template에 title이 있는경우가 있음
        
        for(const data of datas){
            if(checkValidete(data)){
                this.appendContentNode(data,this.loopNode);
            }
        }
        this.node = this.templateNode;
    }

    appendContentNode(contentItem,loopNode){

        const contentTitleItem = contentItem.title;
        const hasContentTitle = checkValidete(contentTitleItem);

        if(this.hasLoopNode){
            const cloneLoopNode = loopNode.cloneNode(true);

            if(hasContentTitle){
                const contentTitleNode = cloneLoopNode.querySelector('[template-role=content-title-text]');
                appendNode(contentTitleNode,contentTitleItem.text);
            }

            const contentItemNode = cloneLoopNode.querySelector('[template-role=content-items]');
            for(const item of contentItem.content){
                let itemNode = this.createItemNode(item); //textNode or orderNode
                appendNode(contentItemNode,itemNode);
            }

            appendNode(this.loopParentNode,cloneLoopNode);
        }

   }

    appendTitleNode(titleItem){
        const titleTargetNode = this.rootNode.querySelector('[template-role=title-text]');
        const textItem = titleItem.text;
        const iconItem = titleItem.icon;
        const periodItem = titleItem.period;

        if(iconItem instanceof Node){appendNode(titleTargetNode,iconItem);}
        if(typeof textItem === 'string'){appendNode(titleTargetNode,textItem);}
        if(checkValidete(periodItem)){
            const periodTargetNode = this.rootNode.querySelector('[template-role=title-period]');
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