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
    this.loopNode = this.templateNode.querySelector(`[${detailRole.loop}]`);
    this.hasLoopNode = checkValidete(this.loopNode);
    this.loopParentNode = this.hasLoopNode 
                          ? this.loopNode.parentNode
                          : null;

    if (this.hasLoopNode) {
      const loopTemp = this.loopNode.cloneNode(true);
      this.templateNode.querySelector(`[${detailRole.loop}]`).remove();
      this.loopNode = loopTemp;
    }

    //tamplate state
    const templateState = this.templateRole.state;
    this.stateNotSelector = `:not([${templateState.self}=${templateState.done}])`;

    //result
    this.node;
  }

  appendData(datas) {
    for (const data of datas) {
      
      const titleItem = data.title;
      if (checkValidete(titleItem)) {
        this.appendTitleNode(titleItem);
      }

      const detailItems = data.detail;
      if (checkValidete(detailItems)) {
        this.appendDetailNode(detailItems);
      }
    }
    this.node = this.templateNode;
  }

  appendDetailNode(detailItems) {
    if (this.hasLoopNode) {
      appendNode(this.loopParentNode, this.loopNode.cloneNode(true));
    }

    //append title
    const titleObj = detailItems.find((item) => item.hasOwnProperty("title"));
    if(checkValidete(titleObj)){
      const titleData = titleObj.title;
      const titleParentNode = this.findNodeToRole(
        this.templateRole.detail.title,
        true
      );
      for(const key in titleData){
        //text | icon
        const titleItemNode = titleData[key];
        appendNode(titleParentNode, titleItemNode);
      }
      this.doneAppendNode(titleParentNode);
    }

    //append detail
    const detailDatas = detailItems.filter((item) => titleObj !== item);
    const detailItemNode = this.findNodeToRole(
      this.templateRole.detail.detailItems.item,
      true
    );
    for (const detailData of detailDatas) {
      const detailItem = this.createItemNode(detailData);
      this.doneAppendNode(detailItemNode);
      appendNode(detailItemNode, detailItem);
    }

    //
    this.doneAppendNode(detailItemNode);
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

    if (checkValidete(periodItem)) {
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
    const detailItems = this.templateRole.detail.detailItems;
    const templateNode = this.findNodeToRole(detailItems.item);

    if (checkValidete(templateNode)) {
      const childNodes = templateNode.childNodes;
      if (childNodes.length > 0) {
        const itemsNode = this.findNodeToRole(detailItems.self, true);

        //append되면서 template의 index가 변경되므로 while로 처리
        while (childNodes.length > 0) {
          itemsNode.append(childNodes[0]);
        }
        this.doneAppendNode(itemsNode);
        templateNode.remove();
      }
    }
  }

  doneAppendNode(doneNode) {
    doneNode.setAttribute(
      this.templateRole.state.self,
      this.templateRole.state.done
    );
  }
}
