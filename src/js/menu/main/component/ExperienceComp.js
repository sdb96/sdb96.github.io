"use strict"
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
            const loopCount = experienceData.detail.length;
            const loopOpt = {
                count : loopCount,
            }
            contentTemplate.setLoopMode(loopOpt);
            contentTemplate.appendData([experienceData]);
            appendNode(appendTargetNode,contentTemplate.node);
        }

        this.node = experienceNode;
    }
}