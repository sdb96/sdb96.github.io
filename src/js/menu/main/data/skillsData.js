"use strict"
const skillsDatas = {
    mainTitle : '보유기술',
    contents : [
        {
            detail:[
                {
                    title:{
                        icon:NodeStorage.iconNode.js,
                        text:'Javascipt(ES6)'
                    }
                },
                '순수 자바스크립트를 다루며',
                {highlite:' ES6 '},'문법을 활용하고 있습니다.',
                {highlite:' SPA '},'환경의 프로젝트에 참여하고 사내 프로젝트 특성상',
                {highlite:' CSR '},'방식을 채택하여 프로젝트를 진행합니다. DOM 조작, 데이터 조작, 기능 설계를 주 업무로 하고 있습니다.',
            ]
        },
        {
           
            detail:[
                { 
                    title:{
                        icon:NodeStorage.iconNode.ol,
                        text:'OpenLayers'
                    }
                },
                {highlite:' 동적 지도 '},'라이브러리를 활용하여 지자체에 공간 정보 서비스를 제공하는 프로젝트를 다수 진행했습니다. 전반적인 지도의 동작, 컨트롤, 레이어, 오버레이 등',
                {highlite:' 공간 데이터'},'를 다루는 핵심 기술의 활용이 가능합니다.'
            ]
        },
        // {
            
        //     detail:[
        //         {
        //             title:{
        //                 icon:NodeStorage.iconNode.ts,
        //                 text:{lack:'TypeScript'}
        //             }
        //         },
        //         '사내 프로젝트에 적용시켜보고자 제안했지만 적용 대비 성과가 적다고 판단되어 반려되었습니다. 하지만 프로그램의 안정성을 위해 꼭 적용시켜보고 싶어 학습 중입니다.'
        //     ]
        // },
        {
            detail:[
                {
                    title:{
                        icon:NodeStorage.iconNode.react,
                        text:'React'
                    }
                },
                '공공데이터 포털의 open API를 활용한 여주시 내부 통계 사이트 프로젝트에 참여하였을 때 사용했습니다.',
                {highlite:' MobX '},'라이브러리를 사용하여 State를 관리하였고, State의 변동에 따른 동적 지도의 통계 값을 변화시켰습니다. 개념을 일주일 만에 빠르게 익혀서 적용시켰기 때문에',
                {lack:""},' 숙련도가 낮습니다.',
            ]
        },
    ]
};