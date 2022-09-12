import XhrUtil from "../../utils/XhrUtil.js";
import DomUtil from "../../utils/DomUtil.js";
export default class header {
    el;
    constructor() {
    }
    initHtml() {
        const opt = { METHOD: "GET", URL: "/Blog/src/html/common/header.html" };
        return new Promise((resolve) => {
            XhrUtil.request(opt).then((html) => {
                this.el = DomUtil.makeEl(html);
                resolve();
            });
        });
    }
}
//# sourceMappingURL=Header.js.map