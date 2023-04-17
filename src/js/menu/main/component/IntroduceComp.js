class IntroduceComp {
    constructor(){
        this.titleNode;
        this.liTempleNode;
        this.titleTempleNode;
        this.node;
    }

    async init(introduceNode){
        
        //title Ttemplate
        const titleTemplateUrl = 'menu/main/titleTemplate.html';
        const titleTemplateNode = await getFragHtml(titleTemplateUrl);
        //append title text
        const titleTextNode = titleTemplateNode.querySelector('.section-title-content');
        appendNode(titleTextNode,introduceDatas.title); 
        //append template
        const introduceTitleNode = introduceNode.querySelector('.section-title') ;
        appendNode(introduceTitleNode,titleTemplateNode);
        
        //content template
        const liTempleUrl = 'menu/main/liTemplate.html';
        const liTempleNode = await getFragHtml(liTempleUrl);
        // append content
        // const contentTempleRootNode = createEl({ tagName: 'ul' });
        // const contentTamplate = new ContentTemplate(contentTempleRootNode,liTempleNode);

        // for(const introduceData of introduceDatas.content){
        //     const introduceContentNode = contentTamplate.appendData(introduceData);
        //     const sectionContentNode = introduceNode.querySelector('.section-content');
        //     //append template
        //     appendNode(sectionContentNode,introduceContentNode);
        // }
        const appendTargetNode = introduceNode.querySelector('.section-content');
        for(const introduceData of introduceDatas.content){
            //copy template
            const cloneTemplateNode = liTempleNode.cloneNode(true);
            const template = new Template(cloneTemplateNode);

            //append title
            template.appendTitleNode(introduceData.title);
            
            //append content
            // const contentLoopNode = createEl({tagName:'li',attrs:{template:'template-content-item'}});
            template.appendContentNode(introduceData.content);
            
            //append content
            appendNode(appendTargetNode,cloneTemplateNode);
        }

        
        // title + content
        this.node = introduceNode;
    }
}