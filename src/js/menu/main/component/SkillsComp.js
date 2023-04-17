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
        appendNode(titleTextNode,skillsDatas.title); 
        //append template
        const skillsTitleNode = skillsNode.querySelector('.section-title') ;
        appendNode(skillsTitleNode,titleTemplateNode);
        
        //content template
        const liTempleUrl = 'menu/main/liTemplate.html';
        const liTempleNode = await getFragHtml(liTempleUrl);
        
        const appendTargetNode = skillsNode.querySelector('.section-content');
        for(const skillsData of skillsDatas.content){
            //copy template
            const cloneTemplateNode = liTempleNode.cloneNode(true);
            const template = new Template(cloneTemplateNode);

            //append title
            template.appendTitleNode(skillsData.title);
            
            //append content
            // const contentLoopNode = createEl({tagName:'li',attrs:{template:'template-content-item'}});
            template.appendContentNode(skillsData.content);
            
            //append content
            appendNode(appendTargetNode,cloneTemplateNode);
        }
        
        // title + content
        this.node = skillsNode;
    }
}