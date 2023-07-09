class PostingItem{
    
    constructor(opt){
        this.title = opt.title;
        this.content = opt.content;
        this.imageSrc = opt.imageSrc;
        this.postingID  = opt.postingID;

        this.el = createEl(
            {
                text:`<div class="posting-item">
                            <div></div>
                            <div></div>
                        </div>`,
            }
        );

    }


}