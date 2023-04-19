class Template{

    constructor(templateNode){
        // this.rootNode = createEl({tagName:'template'});
        this.templateNode = templateNode.cloneNode(true);
        this.loopNode = this.templateNode.querySelector('[template-role=loop]');
        // this.loopNode;
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
            const titleItem = data.title;
            const detailItem = data.detail;
            if(checkValidete(titleItem)){
                this.appendTitleNode(titleItem);
            }

            if(checkValidete(detailItem)){
                this.appendDetailNode(detailItem,this.loopNode);
            }
        }
        this.node = this.templateNode;
    }

    appendDetailNode(detailItem,loopNode){

        const detailTitleItem = detailItem.title;
        const hasdetailTitle = checkValidete(detailTitleItem);

        if(this.hasLoopNode){
            if(hasdetailTitle){
                const detailTitleNode = this.templateNode.querySelector('[template-role=detail-title-text]');
                appendNode(detailTitleNode,detailTitleItem.text);
            }

            const detailItemNode = this.templateNode.querySelector('[template-role=detail-items]');
            for(const item of detailItem){
                const cloneLoopNode = loopNode.cloneNode(true);
                let itemNode = this.createItemNode(item); //textNode or orderNode
                appendNode(cloneLoopNode,itemNode);
                appendNode(detailItemNode,cloneLoopNode);
            }

            // appendNode(detailItemNode,detailItemNode);
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