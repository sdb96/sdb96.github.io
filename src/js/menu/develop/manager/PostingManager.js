class PostingManager{
    constructor(){
        this.POSTING_STORE = new PostingStore();
        this.PostingContentComp = MenuFactory.CURRENT_MENU.COMPS.PostingContentComp;
    }
    
    searchPostingItem(keyword){
        const searchedPostingData = this.POSTING_STORE.searchPostingData(keyword);
        for(const postingData of searchedPostingData){
            this.displayPostingData(postingData);
        }
    }

    displayPostingData(postingData){
        const postingItem = new PostingItem(postingData);
        appendNode(this.PostingContentComp,postingItem.el);
    }

    openPosting(postingItem){

    }
}