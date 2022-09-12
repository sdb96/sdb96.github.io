type reqOpt = {METHOD:string,URL:string,BODY?:string};
export default class XhrUtil{
    //싱글톤
    private constructor(){}

    public static request(opt:reqOpt):Promise<any>{
        const xhr:XMLHttpRequest = new XMLHttpRequest();
        const method:string = opt.METHOD.toUpperCase();
        const url:string = opt.URL;
        const body:string|null = opt.BODY ? opt.BODY : null;

        return new Promise((resolve,reject)=>{
            xhr.onreadystatechange = ()=>{
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve(xhr.response); 
                }
            }
            xhr.open(method,url,true);
            xhr.send(body);
        });
    }
}
