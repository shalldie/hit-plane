/**
 * @description 工具包 >_<#@!
 */

/**
 * Deferred
 * 
 * @export
 */
export function Deferred() {
    let pro = new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
    });

    this.then = pro.then.bind(this);
    this.catch = pro.catch.bind(this);
    this.promise = pro;
};

/**
 * 预加载图片
 * 
 * @export
 * @param {string} src 图片地址
 * @returns {Promise<any>} 
 */
export function preloadImg(src: string): Promise<any> {
    let dfd = new Deferred();
    let img = new Image();
    img.onload = function () {
        dfd.resolve();
    };
    img.onerror = function () {
        dfd.reject();
    };
    img.src = src;
    return <Promise<any>>dfd.promise;
}
