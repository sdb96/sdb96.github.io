import Header from "./Header.js";
export default class Index {
    constructor() {
        const domObjs = {
            HEADER: new Header(),
            SIDE: "",
        };
        const domKeys = Object.keys(domObjs);
        domKeys.forEach(async (domKey) => {
            const domObj = domObjs[domKey];
            if (domObj instanceof Object) {
                await domObjs[domKey].initHtml();
            }
        });
    }
}
new Index();
//# sourceMappingURL=Index.js.map