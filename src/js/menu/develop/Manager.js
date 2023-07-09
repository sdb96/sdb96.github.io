class DevelopmentManager{
    constructor(){
        this.Store = new Store();
        this.Search = new Search();
    }

    search(keyword){
        const searchedPostingData = this.Store.getPostingData(keyword);
        this.displayPostingDataList(searchedPostingData);
    }
    
    displayPostingDataList(postingDataList){
        // parentNode -> div#develop-content
        //append posting
    }

    getPostingItem(postingData){
        return new PostingItem(postingData);
    }

    goToPosting(postingID){

    }
}