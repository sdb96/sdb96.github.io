class DevelopmentManager{
    constructor(){
        this.Store = new Store();
        this.Search = new Search();
    }

    search(keyword){
        const searchedData = this.Store.getPostingData(keyword);

    }

    goToPosting(postingID){
        
    }
}