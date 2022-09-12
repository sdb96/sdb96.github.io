export default class DomUtil{
    private constructor(){}
    static makeEl(html:string):Element | null{
        const tempEl:Element = document.createElement('temp');
        tempEl.innerHTML = html;
        return tempEl.firstElementChild;
    }
}