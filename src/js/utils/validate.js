"use strict"
function checkValidate(data){
    //is falsy return false;
    if(data === undefined || data === null){return false;}


    // 특정 데이터 타입에 대해서 조건추가
    if(data instanceof String){data.trim() === '' ? false : true;}
    if(data instanceof Number){Number.isNaN === data ? false : true;}
    if(data instanceof Object){Object.keys(data).length > 0 ? false : true;}
    if(data instanceof Array){data.length > 0 ? false : true;}

    // 빈 값이 아니라면 true
    if(data !== undefined || data !== null){return true;}
}