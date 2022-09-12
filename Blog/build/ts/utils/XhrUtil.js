export default class XhrUtil {
    constructor() { }
    static request(opt) {
        const xhr = new XMLHttpRequest();
        const method = opt.METHOD.toUpperCase();
        const url = opt.URL;
        const body = opt.BODY ? opt.BODY : null;
        return new Promise((resolve, reject) => {
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve(xhr.response);
                }
            };
            xhr.open(method, url, true);
            xhr.send(body);
        });
    }
}
//# sourceMappingURL=XhrUtil.js.map