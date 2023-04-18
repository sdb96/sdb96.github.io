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
        
        //append title template
        const introduceTitleNode = introduceNode.querySelector('.section-title') ;
        appendNode(introduceTitleNode,titleTemplateNode);
        
        //content template
        const liTempleUrl = 'menu/main/liTemplate.html';
        const liTempleNode = await getFragHtml(liTempleUrl);

        const appendTargetNode = introduceNode.querySelector('.section-content');
        const contentTemplate = new Template(liTempleNode);
        contentTemplate.appendData(introduceDatas.contents);
        appendNode(appendTargetNode,contentTemplate.node);
        
        // title + content
        this.node = introduceNode;
    }
}