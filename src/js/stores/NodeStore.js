class NodeStore{
    constructor(){}
    static iconNode =
    {
        js:createEl({
            tagName:'i',
            attrs:{
                class:'half-hl',
                title:'Javascipt'
            }
        }),
    }

    static introduceNode =
    {
        highlite:createEl({
            tagName:'b',
            attrs : {class:'half-hl'},
            // text : item[matchKey]
        }),
    }
}
