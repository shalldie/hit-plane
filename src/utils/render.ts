/**
 * 用于在canvas上绘制的包
 */

import Shape from '../shape/Shape';

export function imgSpirit(
    ctx: CanvasRenderingContext2D,
    img: HTMLImageElement,
    speed: number,
    baseTime: Date,
    ifX: boolean,
    sum: number,
    tX: number,
    tY: number,
    tW: number,
    tH: number,
    globalAlpha: number = 1,
    onceCallback?: Function): void {

    if (sum <= 1) {  // 如果是单帧图片
        imgDrawSingle(ctx, img, 0, 0, img.width, img.height, tX, tY, tW, tH);
        onceCallback && onceCallback();
        return;
    }

    var diffTime = +new Date - +baseTime; // 当前时间与创建时间的时间差
    diffTime = diffTime % (speed * sum);

    var nowIndex = ~~(diffTime / speed); // 当前要画的第几帧
    var fX = ifX ? (nowIndex * img.width / sum) : 0;
    var fY = ifX ? 0 : (nowIndex * img.height / sum);
    var fW = ifX ? (img.width / sum) : img.width;
    var fH = ifX ? img.height : (img.height / sum);

    ctx.save();
    ctx.globalAlpha = globalAlpha;
    ctx.drawImage(img, ~~fX, ~~fY, ~~fW, ~~fH, tX, tY, tW, tH);
    ctx.restore();

    if (nowIndex + 1 >= sum) {  // 最后一帧绘制完毕进行回调
        onceCallback && onceCallback();
    }
}

/**
 * 绘制单一图片
 * 
 * @export
 * @param {CanvasRenderingContext2D} ctx 画布对象
 * @param {HTMLImageElement} img 原始图片
 * @param {number} [fX=0] 原始图片x轴偏移量
 * @param {number} [fY=0] 原始图片y轴偏移量
 * @param {number} [fW=img.width] 原始图片截取宽度
 * @param {number} [fH=img.height] 原始图片截图高度
 * @param {number} [tX=0] 画在画布上的x轴坐标
 * @param {number} [tY=0] 画在画布上的y轴坐标
 * @param {number} [tW=img.width] 图片在画布上的宽度
 * @param {number} [tH=img.height] 图片在画布上的高度
 * @param {number} [globalAlpha=1] 透明度
 */
export function imgDrawSingle(
    ctx: CanvasRenderingContext2D,
    img: HTMLImageElement,
    fX: number = 0,
    fY: number = 0,
    fW: number = img.width,
    fH: number = img.height,
    tX: number = 0,
    tY: number = 0,
    tW: number = img.width,
    tH: number = img.height,
    globalAlpha: number = 1): void {
    if (globalAlpha == 1) {
        ctx.drawImage(img, fX, fY, fW, fH, tX, tY, tW, tH);
    } else {
        ctx.save();
        ctx.globalAlpha = globalAlpha;
        ctx.drawImage(img, fX, fY, fW, fH, tX, tY, tW, tH);
        ctx.restore();
    }

}