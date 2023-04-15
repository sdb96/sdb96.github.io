class ExperienceComp {
    constructor(){
        this.titleNode;
        this.contentTempleNode;
        this.titleTempleNode;
        this.node;
    }

    async init(experienceEl){
        
        //title Ttemplate
        const titleTemplateUrl = 'menu/main/titleTemplate.html';
        const titleTemplateNode = await getFragHtml(titleTemplateUrl);
        //append title text
        const titleTextNode = titleTemplateNode.querySelector('.section-title-content');
        appendNode(titleTextNode,experienceDatas.title); 
        //append template
        const experienceTitleNode = experienceEl.querySelector('.section-title') ;
        appendNode(experienceTitleNode,titleTemplateNode);
        
        //content template
        const contentTempleUrl = 'menu/main/liTemplate.html';
        this.contentTempleNode = await getFragHtml(contentTempleUrl);
        // append content
        const contentTempleRootNode = createEl({ tagName: 'ul' });
        const contentTamplate = new ContentTemplate(contentTempleRootNode,this.contentTempleNode);
        const experienceContentNode = contentTamplate.getNodeFromData(experienceDatas.content);
        const sectionContentNode = experienceEl.querySelector('.skill-content');
        //append template
        appendNode(sectionContentNode,experienceContentNode);
        
        // title + content
        this.node = experienceEl;
    }
}