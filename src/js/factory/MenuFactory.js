
class MenuFactory{
    constructor(){};
    
    //변경 불가능한 타입으로 지정
    static TYPE = Object.freeze({
        MAIN : "main",
    });
    static MENU;
    //TYPE에 일치하는 메뉴 return
    static async getMenu(type){
        const prefix = "/src/html/";
        let url;
        if(this.TYPE.MAIN === type){
            // TODO >> UI 컴포넌트에서 결정
            url = prefix + "common/header.html";
            this.MENU = MainComp;
        }

        const menuNodeList = await getFragHtml(url);
        return new this.MENU();
    }

}

