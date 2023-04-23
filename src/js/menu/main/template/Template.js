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
    this.loopParentNode = this.hasLoopNode ? this.loopNode.parentNode : null;
    if (this.hasLoopNode) {
      const loopTemp = this.loopNode.cloneNode(true);
      this.templateNode.querySelector(`[${detailRole.loop}]`).remove();
      this.loopNode = loopTemp;
    }

    this.stateNotSelector = `:not([${this.templateRole.state}=done])`;
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
    const titleItem = detailItems.find((item) => {
      if (item.hasOwnProperty("title")) {
        return item;
      }
    });
    this.appendDetailTitle(titleItem);

    //append detail
    const detailItem = detailItems.filter((item) => {
      if (titleItem !== item) {
        return item;
      }
    });
    const detailItemNode = this.findNodeToRole(this.templateRole.detail.detailItems.item,true);
    for (const item of detailItem) {
        this.appendDetailItem(detailItemNode,item);
    }
    detailItemNode.setAttribute("template-state", "done");
    this.readjustTemplateNode();
  }

  appendDetailTitle(titleNode) {
    const titleParentNode = this.findNodeToRole(
      this.templateRole.detail.title,
      true
    );
    appendNode(titleParentNode, titleNode);
  }

  appendDetailItem(detailItemNode,item) {
    const itemNode = this.createItemNode(item);
    detailItemNode.setAttribute("template-state", "done");
    appendNode(detailItemNode, itemNode);
  }

  appendTitleNode(titleItem) {
    const titleRole = this.templateRole.title;
    const titleTextNode = this.findNodeToRole(titleRole.text);

    const textItem = titleItem.text;
    const iconItem = titleItem.icon;
    const periodItem = titleItem.period;

    if (iconItem instanceof Node) {
      appendNode(titleTextNode, iconItem);
    }
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
        const itemsNode = this.findNodeToRole(detailItems.self,true);
        appendNode(itemsNode, childNodes);
        itemsNode.setAttribute("template-state", "done");
        templateNode.remove();
      }
    }
  }
}
