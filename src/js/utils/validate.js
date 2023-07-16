"use strict"
function checkValidate(data){
    //is falsy return false;
    if(data === undefined || data === null){return false;}


    // 특정 데이터 타입에 대해서 조건추가
    if(data instanceof String){return data.trim() !== ''}
    if(data instanceof Number){return Number.isNaN !== data}
    if(data instanceof Array){return data.length > 0}
    if(data instanceof Node){return true;}
    if(data instanceof Object){return Object.keys(data).length > 0;}

    // 빈 값이 아니라면 true
    if(data !== undefined || data !== null){return true;}
}