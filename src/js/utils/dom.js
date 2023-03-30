
//Dom 문서로 생성된 NodeList 리턴
function createNodeList(fragHtml){
    const dom = new DOMParser().parseFromString(fragHtml,'text/html');
    return dom.body.childNodes;
}

//NodeList 혹은 Single Node를 원하는 위치에 붙이기
function appendNode(item,target,pos="beforeend"){
    if(item instanceof NodeList){
        for(node in item){
            target.insertAdjacentElement(pos,node);
        }
    }

    if(item instanceof Node){
        target.insertAdjacentElement(pos,node);
    }
}