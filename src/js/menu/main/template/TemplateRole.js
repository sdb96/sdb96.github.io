class TemplateRole{
    constructor(){
        this.templateRole={
            title:{
                self:'title',
                text:'title-text',
                period : 'title-period'
            },
            detail:{
                self:'detail',
                loop:'template-loop',
                title:'detail-title-text',
                detailItems:{
                    self :'detail-items',
                    item : 'detail-item',
                    template : 'template'
                },
                
            },
            state :{
                self : 'template-state',
                done : 'done'
            } 
        }
    }
}