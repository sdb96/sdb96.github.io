class PostingItem{
    
    constructor(postingData){
       this.el = createNode(
            `<div class="posting-item">
                ${postingData.imgHtml}
                <div class="posting-item-content"></div>
                <h4 class="posting-item-title">${postingData.title}</h4>
                <p class ="posting-item-text">
                    ${postingData.text}
                </p>
            </div>`
       );
    }
}