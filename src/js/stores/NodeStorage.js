class NodeStorage{
    constructor(){}
    static iconNode =
    {
        js:createEl({
            tagName:'i',
            attrs:{
                class:'i-js',
                title:'Javascipt'
            }
        }),
        ol:createEl({
            tagName:'i',
            attrs:{
                class:'i-ol',
                title:'Openlayers'
            }
        }),
        ts:createEl({
            tagName:'i',
            attrs:{
                class:'i-ts',
                title:'Typescript'
            }
        }),
        react:createEl({
            tagName:'i',
            attrs:{
                class:'i-react',
                title:'React'
            }
        }),
    }

    static introduceNode =
    {
        highlite:createEl({
            tagName:'b',
            attrs : {class:'half-hl'},
        }),
        lack:createEl({
            tagName:'b',
            attrs : {class:'lack'},
        }),
        dashedLine:''
    }
}
