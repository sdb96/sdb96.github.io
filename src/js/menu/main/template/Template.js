"use strict"
class Template extends TemplateRole {
  constructor(templateNode) {
    super();
    //template root
    this.templateNode = templateNode.cloneNode(true);

    //title
    this.titleNode = this.findNodeToRole(this.templateRole.title.self);

    //detail
    const detailRole = this.templateRole.detail;
    this.detailNode = this.findNodeToRole(detailRole.self);
    this.detailItemsNode = this.findNodeToRole(detailRole.detailItems.self);
    this.detailItemNode = this.findNodeToRole(detailRole.detailItems.item);

    //loop
    this.loopMode = false;

    //tamplate state
    const templateState = this.templateRole.state;
    this.stateNotSelector = `:not([${templateState.self}=${templateState.done}])`;

    //result
    this.node;
  }

  setLoopMode(opt) {
    this.loopMode = true;
    this.loopCount = opt.count;

    const loopNode = this.templateNode.querySelector(
      `[${this.templateRole.detail.loop}]`
    );
    this.loopParentNode = loopNode.parentNode;
    this.loopNode = loopNode.cloneNode(true);

    while (--this.loopCount > 0) {
      appendNode(this.loopParentNode, this.loopNode.cloneNode(true));
    }
  }

  appendData(datas) {
    for (const data of datas) {
      const titleItem = data.title;
      if (checkValidate(titleItem)) {
        this.appendTitleNode(titleItem);
      }

      const detailItems = data.detail;
      if (checkValidate(detailItems)) {
        this.appendDetailNode(detailItems);
      }
    }
    this.node = this.templateNode;
  }

  appendDetailNode(detailItems) {
    //append title
    const titleObj = detailItems.find((item) => item.hasOwnProperty("title"));
    if (checkValidate(titleObj)) {
      const titleData = titleObj.title;
      const titleParentNode = this.findNodeToRole(
        this.templateRole.detail.title,
        true
      );
      for (const key in titleData) {
        //text | icon
        const titleItemNode = titleData[key];
        appendNode(titleParentNode, titleItemNode);
      }
      this.doneAppendNode(titleParentNode);
    }

    //append detail
    const detailDatas = detailItems.filter((item) => titleObj !== item);
    for (const detailData of detailDatas) {
      const detailItemNode = this.findNodeToRole(
        this.templateRole.detail.detailItems.item,
        true
      );
      const detailItem = this.createItemNode(detailData);
      appendNode(detailItemNode, detailItem);

      //template Node 일때는 제외
      if (!(detailItemNode instanceof HTMLTemplateElement)) {
        this.doneAppendNode(detailItemNode);
      }
    }

    this.readjustTemplateNode();
  }

  appendTitleNode(titleItem) {
    const titleRole = this.templateRole.title;
    const titleTextNode = this.findNodeToRole(titleRole.text);

    const textItem = titleItem.text;
    const periodItem = titleItem.period;

    if (typeof textItem === "string") {
      appendNode(titleTextNode, textItem);
    }

    if (checkValidate(periodItem)) {
      const periodTargetNode = this.findNodeToRole(titleRole.period);
      appendNode(periodTargetNode, periodItem);
    }
  }

  createItemNode(item) {
    if (typeof item === "string") {
      return document.createTextNode(item);
    }

    if (item instanceof Object) {
      const matchKey = "highlite";
      const matchData = item[matchKey];
      const hasProp = Object.hasOwn(item, matchKey);
      if (hasProp) {
        const highliteEl = NodeStorage.introduceNode[matchKey].cloneNode(true);
        const highliteTxtNode = document.createTextNode(matchData);
        appendNode(highliteEl, highliteTxtNode);
        return highliteEl;
      }
    }
  }

  findNodeToRole(role, not) {
    let selector = `[template-role=${role}]`;
    if (not) {
      selector += this.stateNotSelector;
    }
    return this.templateNode.querySelector(selector);
  }

  readjustTemplateNode() {
    const templateNode = this.templateNode.querySelector("template");
    if(checkValidate(templateNode)){
      const templateParentNode = templateNode.parentNode;
      const childNodes = templateNode.childNodes;
      while (childNodes.length > 0) {
        templateParentNode.append(childNodes[0]);
      }
      
      templateNode.remove();
    }
  }

  doneAppendNode(doneNode) {
    doneNode.setAttribute(
      this.templateRole.state.self,
      this.templateRole.state.done
    );
  }
}
