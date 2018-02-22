// declare var require: {
//     <T>(path: string): T;
//     (paths: string[], callback: (...modules: any[]) => void): void;
//     ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
// };
declare function require(moduleName: string): any;
import * as _ from './utils/tool';
import g from './global';
// polyfill
import 'babel-polyfill';

// 加载样式
import '../resource/index.scss';

// 画布 resize
(() => {
    /**
     * 背景尺寸调整
     */
    function resizeFunc() {
        let background = g.background;
        let bg = <HTMLDivElement>document.getElementById("bg");
        let ele = <HTMLCanvasElement>document.getElementById("app");

        ele.height = document.body.clientHeight * 2;
        ele.width = ele.height * background.width / background.height;

        // 缩放并居中
        ele.style.cssText = `transform:translate3d(-50%,-50%,0) scale(.5)`;

        bg.style.width = ele.width / 2 + "px";
        bg.style.height = ele.height + "px";
    }

    window.addEventListener('resize', resizeFunc);
    resizeFunc();
})();

// 预加载图片
(async () => {
    // 图片地址
    let imgSrcArr: string[] = [
        'bg.jpg',
        'boom.png',
        'bullet01.png',
        'bullet02.png',
        'bullet03.png',
        'enemy.png',
        'enemy_bullet.png',
        'heart.png',
        'hp.png',
        'plane.png'
    ];
    // 图片加载数量
    let imgLoadedCount: number = 0;
    let loadEle = document.getElementById('loading');

    function invokeImgLoadProgress() {
        imgLoadedCount++;

        loadEle.innerHTML =
            'loading......' +
            ~~(imgLoadedCount * 100 / imgSrcArr.length) +
            '%';
    }

    // 所有图片加载完毕
    await Promise.all(imgSrcArr.map(src => _.preloadImg(`img/${src}`)));
    // 隐藏进度，显示游戏
    loadEle.parentNode.removeChild(loadEle);
    document.getElementById('bg').style.display = 'block';
    document.getElementById('app').style.display = 'block';
})();
