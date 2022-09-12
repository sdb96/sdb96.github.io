import XhrUtil from "../../utils/XhrUtil.js";
export default class Main {
    constructor() {
        let el;
    }
    initHtml() {
        const opt = { METHOD: "GET", URL: "/common/main.html" };
        return new Promise((resolve) => {
            XhrUtil.request(opt).then((html) => {
                resolve(html);
            });
        });
    }
}
//# sourceMappingURL=Main.js.map