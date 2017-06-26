/**
 * 形状类，基类
 * 
 * @abstract
 * @class Shape
 */
abstract class Shape {

    /**
     * 是否 生存/可用
     * 
     * @type {boolean}@memberof Shape
     */
    public alive: boolean = true;

    /**
     * 绘制所使用的图片
     * 
     * @protected
     * @type {HTMLImageElement}@memberof Shape
     */
    protected img: HTMLImageElement;

    /**
     * 创建时间 (时间戳)
     * 
     * @type {number}@memberof Shape
     */
    public createTime: number = +new Date();

    /**
     * 渲染速度
     * 
     * @protected
     * @type {number}@memberof Shape
     */
    protected colourSpeed: number;

    /**
     * 是否X轴展开
     * 
     * @protected
     * @type {boolean}@memberof Shape
     */
    protected ifXSpread: boolean = true;

    protected imgSum: number = 1;

    private _x: number = 0;

    public get x(): number {
        return this._x;
    }

    public set x(num: number) {
        this._x = ~~num;
    }

    private _y: number = 0;

    public get y(): number {
        return this._y;
    }

    public set y(num: number) {
        this._y = ~~num;
    }

    private _width: number = 0;

    public get width(): number {
        return this._width;
    }

    public set width(wid: number) {
        this._width = ~~wid;
    }

    private _height: number = 0;

    public get height(): number {
        return this._height;
    }

    public set height(hei: number) {
        this._height = ~~hei;
    }

    private _realWidth: number;

    public get realWidth(): number {
        return this._realWidth;
    }

    public set realWidth(realWid: number) {
        this._realWidth = ~~realWid;
    }

    private _realHeight: number;

    public get realHeight(): number {
        return this._realHeight;
    }

    public set realHeight(realHei: number) {
        this._realHeight = ~~realHei;
    }
}

export default Shape;