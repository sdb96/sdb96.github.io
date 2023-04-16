class IntroduceComp {
    constructor(){
        this.titleNode;
        this.contentTempleNode;
        this.titleTempleNode;
        this.node;
    }

    async init(introduceEl){
        
        //title Ttemplate
        const titleTemplateUrl = 'menu/main/titleTemplate.html';
        const titleTemplateNode = await getFragHtml(titleTemplateUrl);
        //append title text
        const titleTextNode = titleTemplateNode.querySelector('.section-title-content');
        appendNode(titleTextNode,introduceDatas.title); 
        //append template
        const introduceTitleNode = introduceEl.querySelector('.section-title') ;
        appendNode(introduceTitleNode,titleTemplateNode);
        
        //content template
        const contentTempleUrl = 'menu/main/liTemplate.html';
        this.contentTempleNode = await getFragHtml(contentTempleUrl);
        // append content
        const contentTempleRootNode = createEl({ tagName: 'ul' });
        const contentTamplate = new ContentTemplate(contentTempleRootNode,this.contentTempleNode);

        for(const introduceData of introduceDatas.content){
            const introduceContentNode = contentTamplate.appendData(introduceData);
            const sectionContentNode = introduceEl.querySelector('.section-content');
            //append template
            appendNode(sectionContentNode,introduceContentNode);
        }

        
        // title + content
        this.node = introduceEl;
    }
}