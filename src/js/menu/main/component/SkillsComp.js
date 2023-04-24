class SkillsComp {
    constructor(){
        this.titleNode;
        this.contentTempleNode;
        this.titleTempleNode;
        this.node;
    }

    async init(skillsNode){
        
        //title Ttemplate
        const titleTemplateUrl = 'menu/main/titleTemplate.html';
        const titleTemplateNode = await getFragHtml(titleTemplateUrl);
        //append title text
        const titleTextNode = titleTemplateNode.querySelector('.section-title-content');
        appendNode(titleTextNode,skillsDatas.mainTitle); 
        //append template
        const skillsTitleNode = skillsNode.querySelector('.section-title') ;
        appendNode(skillsTitleNode,titleTemplateNode);
        
        //content template
        const liTempleUrl = 'menu/main/liTemplate.html';
        const liTempleNode = await getFragHtml(liTempleUrl);
        const appendTargetNode = skillsNode.querySelector('.skill-content');
        const contentTemplate = new Template(liTempleNode);
        contentTemplate.appendData(skillsDatas.contents);
        appendNode(appendTargetNode,contentTemplate.node);

        // title + content
        this.node = skillsNode;
    }
}