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

        const divTempleUrl = 'menu/main/divTemplate.html';
        const divTemplateNode = await getFragHtml(divTempleUrl);
        
        
        const divRootNode = experienceEl.querySelector('.section-content');
        
        // const divTemplate = new Template(divTemplateNode);
        for(const experienceData of experienceDatas.content){
            //copy template
            const cloneTemplateNode = divTemplateNode.cloneNode(true);
           
            //append title
            const titleNode = cloneTemplateNode.querySelector(".template-title");
            const TitleTemplate = new Template(titleNode);
            TitleTemplate.appendTitleNode(titleNode,experienceData.title);
            
            //append content
            const contentNode = cloneTemplateNode.querySelector('.template-content-item');
            const contentTemplate = new Template(contentNode);
            // const contentUlNode = createEl({tagName:'ul'});
            const contentLiNode = createEl({tagName:'li'});
            for(const contentItem of experienceData.content){
                contentTemplate.appendContentNode(contentLiNode,contentItem);
                appendNode(contentNode,contentLiNode);
            }
            // appendNode(uNode,liTemplateNode);
            // appendNode(contentNode,uNode);
            // appendNode(divTemplate,contentNode);
            
            appendNode(divRootNode,cloneTemplateNode);
        }
        console.log();

        //content template
        // const contentTempleUrl = 'menu/main/liTemplate.html';
        // this.contentTempleNode = await getFragHtml(contentTempleUrl);
        // // append content
        // const contentTempleRootNode = createEl({ tagName: 'ul' });
        // const contentTamplate = new ContentTemplate(contentTempleRootNode,this.contentTempleNode);
        // const experienceContentNode = contentTamplate.getNodeFromData(experienceDatas.content);
        // const sectionContentNode = experienceEl.querySelector('.skill-content');
        // //append template
        // appendNode(sectionContentNode,experienceContentNode);
        
        // title + content
        this.node = experienceEl;
    }
}