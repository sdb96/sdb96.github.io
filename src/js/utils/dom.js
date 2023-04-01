
//Dom 문서로 생성된 NodeList 리턴
function createNode(fragHtml){
    const dom = new DOMParser().parseFromString(fragHtml,'text/html');
    return dom.body.firstElementChild;
}

//NodeList 혹은 Single Node를 원하는 위치에 붙이기
function appendNode(targetNode,itemNode,pos="beforeend"){
    
    //falsy
    if(!checkValidete(itemNode) || !checkValidete(targetNode)){
        console.error("item or target is falsy");
        return false;
    }

    if(itemNode instanceof NodeList){
        for(node in itemNode){
            targetNode.insertAdjacentElement(pos,itemNode);
        }
    }

    if(itemNode instanceof Node){
        targetNode.insertAdjacentElement(pos,itemNode);
    }
}