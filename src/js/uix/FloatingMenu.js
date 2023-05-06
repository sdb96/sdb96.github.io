"use strict"
class FloatingMenu {
  constructor(opt) {
    this.node;
    this.floatingMenuNodes = {};
    this.onClass = "on";
    this.floatingMenuClass = "floating-manu";
    this.currentOnNode;

    const defaultOpt = {
      width: "10em",
      height: "max-content",
      position: "fixed",
      backgroundColor: "none",
      textColor: "#ffffff",
      top: "150px",
      bottom: "0",
      right: "120px",
      "z-index": 999,
    };

    this.option = Object.assign(defaultOpt, opt);

    this.bindedEvt = {}

    this.init();
  }

  init() {
    this.initNode();
    this.initOption();
    this.initFloatingMenuNodes();
    this.initEvt();
  }

  initNode() {
    const prevFloatingNode =  document.querySelector(`.${this.floatingMenuClass}`);
    if(checkValidate(prevFloatingNode)){
      prevFloatingNode.remove();
    }

    //nodeList -> Array
    this.node = createEl({
      tagName: "div",
      class: this.floatingMenuClass,
    });
    appendNode(document.body, this.node);
  }

  initFloatingMenuNodes() {
    //append parent
    const listNode = createEl({
      tagName: "ul",
    });
    appendNode(this.node, listNode);

    //append children
    const menuNodeList = this.option.menuNodeList;
    menuNodeList.forEach((menuNode, idx) => {
      const menuText = menuNode.textContent;
      const liNode = createEl({
        tagName: "li",
        text: menuText,
      });

      this.floatingMenuNodes[idx] = liNode;
      this.floatingMenuNodes[idx].dataset.y = menuNode.getBoundingClientRect().y
                                               - MenuFactory.DefaultComp.COMPS.HEADER.el.offsetHeight;

      appendNode(listNode, liNode);
    });
  }

  initOption() {
    //style option
    for (const opt in this.option) {
      this.node.style[opt] = this.option[opt];
    }

    //nodeList -> arrayList
    this.option.menuNodeList = Array.from(this.option.menuNodeList);
  }

  initEvt() {
    this.initScrollEvt();
    this.initClickEvt();
  }

  initScrollEvt() {
    this.bindedEvt.onOffEvt = this.onOffEvt.bind(this);
    window.addEventListener("scroll", this.bindedEvt.onOffEvt);
  }

  initClickEvt() {
    const floatingMenuNodes = Object.values(this.floatingMenuNodes);
    floatingMenuNodes.forEach((floatingMenuNode) => {
      floatingMenuNode.addEventListener("click", this.goToMenuNode);
    });
  }

  onOffEvt() {
    const onTargetNode = this.getOnTargetNode();
    this.onMenuNode(onTargetNode);
  }

  getOnTargetNode() {
    const idx = this.option.menuNodeList.findIndex((menuNode) => {
      return menuNode.getBoundingClientRect().top > 0;
    });

    return this.floatingMenuNodes[idx];
  }

  offMenuNode() {
    if (checkValidate(this.currentOnNode)) {
      this.currentOnNode.classList.remove(this.onClass);
    }
  }

  onMenuNode(menuNode) {
    if (checkValidate(this.currentOnNode) && this.currentOnNode !== menuNode) {
      this.offMenuNode();
    }
    menuNode.classList.add(this.onClass);
    this.currentOnNode = menuNode;
  }

  getOnMenuNode() {
    return this.option.menuNodeList.find((menuNode) =>
      menuNode.classList.has(this.onClass)
    );
  }

  goToMenuNode(e) {
    const targetNode = e.currentTarget;
    window.scrollTo({
        top : targetNode.dataset.y,
        behavior : "smooth"
    });
  }

  dispose(){
    window.removeEventListener("scroll", this.bindedEvt.onOffEvt);
    this.node.remove();
  }
}