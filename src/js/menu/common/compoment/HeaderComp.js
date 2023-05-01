"use strict"
//헤더 컴포넌트
class HeaderComp{
    
    constructor(parentEl){
        this.htmlUrl = "common/header.html";
        this.parentEl = parentEl;
        this.el;
    }
    
    async init(){
        this.el = await getFragHtml(this.htmlUrl);
        appendNode(this.parentEl,this.el);
        this.addEvent();
    }

    /* Event */
    addEvent(){
        //메뉴 전환
        const menuEls = this.el.querySelectorAll("[menu]");
        menuEls.forEach((menuEl)=>{
            menuEl.addEventListener("click",this.changeMenuEvt);
        });
        
        //화면이 작은경우 메뉴 toggle
        const menuToggleBtn = this.el.querySelector(".nav-bar__toggle-btn");
        menuToggleBtn.addEventListener('click',this.menuToggleEvt.bind(this));
    }

    changeMenuEvt(e){
        const selectedMenuType = e.currentTarget.getAttribute("menu");
        const menuType = MenuFactory.TYPE[selectedMenuType];
        MenuFactory.changeMenu(menuType);
    }

    menuToggleEvt(){
        const menuEl = this.el.querySelector(".nav-bar__menu");
        const iconsEl = this.el.querySelector(".nav-bar__sns");
        menuEl.classList.toggle("active");
        iconsEl.classList.toggle("active");
    }
    /*END Event */
}