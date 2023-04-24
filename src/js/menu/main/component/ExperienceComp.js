class ExperienceComp {
    constructor(){
        this.titleNode;
        this.contentTempleNode;
        this.titleTempleNode;
        this.node;
    }

    async init(experienceNode){
        
        //title Ttemplate
        const templateUrl = 'menu/main/titleTemplate.html';
        const templateNode = await getFragHtml(templateUrl);

        //append title text
        const titleTextNode = templateNode.querySelector('.section-title-content');
        appendNode(titleTextNode,experienceDatas.mainTitle); 
        
        //append template
        const experienceTitleNode = experienceNode.querySelector('.section-title') ;
        appendNode(experienceTitleNode,templateNode);

        const divTempleUrl = 'menu/main/divTemplate.html';
        const divTemplateNode = await getFragHtml(divTempleUrl);
        const appendTargetNode = experienceNode.querySelector('.section-content');
        
        for(const experienceData of experienceDatas.contents){

            const contentTemplate = new Template(divTemplateNode);
            contentTemplate.appendData([experienceData]);
            appendNode(appendTargetNode,contentTemplate.node);
        //     //copy template
        //     const cloneTemplateNode = divTemplateNode.cloneNode(true);
        //     const template = new Template(cloneTemplateNode);
            
        //     //append title
        //     template.appendTitleNode(experienceData.title);
            
        //     //append content
        //     const contentLoopNode = createEl({tagName:'li',attrs:{template:'template-content-item'}});
        //     template.appendContentNode(experienceData.content,contentLoopNode);
            
        //     //append content
        //     appendNode(appendTargetNode,cloneTemplateNode);

        //     // <hr class=".h-line"></hr> 반복 돌리기
        }

        this.node = experienceNode;
    }
}