// declare var require: {
//     <T>(path: string): T;
//     (paths: string[], callback: (...modules: any[]) => void): void;
//     ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
// };
declare function require(moduleName: string): any;

// 加载样式
import '../index.scss';

// 画布 resize
(() => {
    let bg = <HTMLDivElement>document.getElementById("bg");
    let ele = <HTMLCanvasElement>document.getElementById("app");

    ele.height = document.body.clientHeight * 2;
    ele.width = ele.height * 512 / 768;

    ele.style.cssText = `transform:translate3d(-50%,-50%,0) scale(.5)`;

    bg.style.width = ele.width / 2 + "px";
    bg.style.height = ele.height + "px";
})();

// 预加载图片
let imgSrcArr: string[] = [
    "bg.jpg",
    "boom.png",
    "bullet01.png",
    "bullet02.png",
    "bullet03.png",
    "enemy.png",
    "enemy_bullet.png",
    "heart.png",
    "hp.png",
    "plane.png"];


let loadedImgCount: number = 0;

/**
 * 根据图片地址返回一个预加载Promise
 * 
 * @param {string} imgSrc 
 * @returns {Promise<HTMLImageElement>} 
 */
function updateLoading(imgSrc: string): Promise<HTMLImageElement> {
    return new Promise<HTMLImageElement>(res => {
        let img = new Image();
        img.onload = function () {
            loadedImgCount++;
            let loadEle = document.getElementById('loading');
            loadEle.innerHTML = 'loading......' + ~~(loadedImgCount * 100 / imgSrcArr.length) + '%';
            if (loadedImgCount >= imgSrcArr.length) {
                loadEle.parentNode.removeChild(loadEle);
            }
            res(img);
        };
        setTimeout(function () {

            img.src = imgSrc;
        }, Math.random() * 1000);
    });
}

(async () => {
    // 加载图片
    let imgArr = await Promise.all(imgSrcArr.map(src => updateLoading('img/' + src)));
    document.getElementById('bg').style.display = 'block';
    document.getElementById('app').style.display = 'block';
    let imgDict: object = {};
    for (let i = 0, len = imgArr.length; i < len; i++) {  // for 要比 forEach,map 等效率高不少，，在V8下
        let name = imgArr[i].src.replace(/^\S*\/|\.[^\.]*$/g, '');
        if (name != 'bg') imgDict[name] = imgArr[i];
    }
})();