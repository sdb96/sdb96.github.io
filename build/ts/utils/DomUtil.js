export default class DomUtil {
    constructor() { }
    static makeEl(html) {
        const tempEl = document.createElement('temp');
        tempEl.innerHTML = html;
        return tempEl.firstElementChild;
    }
}
//# sourceMappingURL=DomUtil.js.map