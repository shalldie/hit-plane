import IShape from './IShape';

/**
 * 形状类，基类
 * 
 * @abstract
 * @class Shape
 */
abstract class Shape implements IShape {

    /**
     * 是否 生存/可用
     * 
     * @type {boolean}@memberof Shape
     */
    public alive: boolean = true;

    /**
     * 绘制所使用的图片
     * 
     * @public
     * @type {HTMLImageElement}@memberof Shape
     */
    public img: HTMLImageElement;

    /**
     * 创建时间 (时间戳)
     * 
     * @type {number}@memberof Shape
     */
    public createTime: number = +new Date();

    /**
     * 渲染速度
     * 
     * @public
     * @type {number}@memberof Shape
     */
    public colourSpeed: number;

    /**
     * 雪碧图数量
     * 
     * @public
     * @type {number}@memberof Shape
     */
    public imgSum: number = 1;

    private _x: number = 0;

    /**
     * 获取/设置 x轴坐标
     * 
     * @type {number}@memberof Shape
     */
    public get x(): number {
        return this._x;
    }

    public set x(num: number) {
        this._x = ~~num;
    }

    private _y: number = 0;

    /**
     * 获取/设置 y轴坐标
     * 
     * @type {number}@memberof Shape
     */
    public get y(): number {
        return this._y;
    }

    public set y(num: number) {
        this._y = ~~num;
    }

    private _width: number = 0;

    /**
     * 获取/设置 宽度
     * 
     * @type {number}@memberof Shape
     */
    public get width(): number {
        return this._width;
    }

    public set width(wid: number) {
        this._width = ~~wid;
    }

    private _height: number = 0;

    /**
     * 获取/设置 高度
     * 
     * @type {number}@memberof Shape
     */
    public get height(): number {
        return this._height;
    }

    public set height(hei: number) {
        this._height = ~~hei;
    }

    public scale: number = 1;

    private _realWidth: number;


    /**
     * 获取/设置 碰撞检测宽度
     * 
     * @type {number}@memberof Shape
     */
    public get realWidth(): number {
        return this._realWidth;
    }

    public set realWidth(realWid: number) {
        this._realWidth = ~~realWid;
    }

    private _realHeight: number;

    /**
     * 获取/设置 碰撞检测高度
     * 
     * @type {number}@memberof Shape
     */
    public get realHeight(): number {
        return this._realHeight;
    }

    public set realHeight(realHei: number) {
        this._realHeight = ~~realHei;
    }

    /**
     * 透明度
     * 
     * @type {number}@memberof Shape
     */
    public opacity: number = 1;


    /**
     * 用于控制opacity的定时器
     * 
     * @private
     * @type {number}
     * @memberof Shape
     */
    private _opacityTimer: number;

    constructor({ x, y, width, height, scale }: IShape) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.scale = scale;
    }

    public onPaint(ctx: CanvasRenderingContext2D): void {
        if (!this.alive) return;
    }

    /**
     * 持续一段时间的半透明
     * 
     * @param {number} opacity 半透明度
     * @param {number} last 持续时间
     * @memberof Shape
     */
    public lastOpacity(opacity: number, last: number): void {
        this.opacity = opacity;
        clearTimeout(this._opacityTimer);
        this._opacityTimer = setTimeout(() => {
            this.opacity = 1;
        }, last);
    }

}

export default Shape;