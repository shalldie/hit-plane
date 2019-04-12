import EventEmitter from "../lib/EventEmitter";

/**
 * requestAnimationFrame 简易封装
 *
 * @export
 * @param {Function} fn
 */
export function invokeAnimation(fn: Function) {
    fn();
    window.requestAnimationFrame(() => {
        invokeAnimation(fn);
    });
}

export function loadImages(urls: string[]) {
    const emitter = new EventEmitter();
    urls.forEach(url => {

    })
}
