/**
 * 各形状基类
 */
export default abstract class Shape {

    /**
     * 是否 生存/可用
     */
    public alive: boolean = true;

    /**
     * 绘制所使用的图片
     */
    protected img: HTMLImageElement;

    /**
     * 创建时间 (时间戳)
     */
    public createTime: number = +new Date();

    /**
     * 渲染速度
     */
    protected colourSpeed: number;
}