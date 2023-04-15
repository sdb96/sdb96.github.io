class SkillsComp {
    constructor(){
        this.titleNode;
        this.contentTempleNode;
        this.titleTempleNode;
        this.node;
    }

    async init(skillsEl){
        
        //title Ttemplate
        const titleTemplateUrl = 'menu/main/titleTemplate.html';
        const titleTemplateNode = await getFragHtml(titleTemplateUrl);
        //append title text
        const titleTextNode = titleTemplateNode.querySelector('.section-title-content');
        appendNode(titleTextNode,skillsDatas.title); 
        //append template
        const skillsTitleNode = skillsEl.querySelector('.section-title') ;
        appendNode(skillsTitleNode,titleTemplateNode);
        
        //content template
        const contentTempleUrl = 'menu/main/liTemplate.html';
        this.contentTempleNode = await getFragHtml(contentTempleUrl);
        // append content
        const contentTempleRootNode = createEl({ tagName: 'ul' });
        const contentTamplate = new ContentTemplate(contentTempleRootNode,this.contentTempleNode);
        const skillsContentNode = contentTamplate.getNodeFromData(skillsDatas.content);
        const sectionContentNode = skillsEl.querySelector('.skill-content');
        //append template
        appendNode(sectionContentNode,skillsContentNode);
        
        // title + content
        this.node = skillsEl;
    }
}