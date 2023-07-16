class PostingStore{
    constructor(){
        this.POSTING_DATAS = postingDatas;
    }

    searchPostingData(keyword){
        const searchedPostingDatas = this.POSTING_DATAS.filter((postingData)=>{
            const keys = Object.keys(postingData);
            for(const key of keys){
                postingData[key].includes(keyword);
            }
        });

        return checkValidate(searchedPostingDatas) 
                ? searchedPostingDatas
                : this.POSTING_DATAS;
    }


}