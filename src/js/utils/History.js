class History{
    constructor(){}

    //총 히스토리 수
    static HISTORY_CNT=0;
    //히스토리 idx 별 호출 함수 저장객체
    static HISTORY = {};

    static addHistory(callback){
        history.pushState({page:++this.HISTORY_CNT},null);
        this.HISTORY[this.HISTORY_CNT] = callback;
    }

    static callHistory(e){
        History.HISTORY[e.state.page].call();
    }
    
}