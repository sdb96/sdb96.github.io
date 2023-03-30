
async function getFragHtml(url){

    //html 조각코드
    const fragHtml = await fetch(url).then((res)=>{
        if(res.status === 200){
            return res.text();
        }
    });
    
    return createNodeList(fragHtml);
}