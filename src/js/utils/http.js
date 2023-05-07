"use strict"
async function getFragHtml(url){

    const prefix = config.HTML.prefix;
    //html 조각코드
    const fragHtml = await fetch(prefix+url).then((res)=>{
        if(res.status === 200){
            return res.text();
        }
    });
    
    return createNode(fragHtml);
}

function getUrlParem(key){
    const urlParam = new URLSearchParams(location.search);
    if(urlParam.has(key)){
        return urlParam.get(key);
    }
}