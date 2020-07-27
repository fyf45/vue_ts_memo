import Category from "./CateEnum";
class ItemData {
    id: number;
    cateGoryId: Category;
    title: string;
    content: string;
    createTime: string;
    constructor(id: number = -1, cateGoryId: Category = -1, title: string = "", content: string = "") {
        this.id = id;
        this.cateGoryId = cateGoryId;
        this.title = title;
        this.content = content;
        this.createTime = this.toSelfDateStr(Date.now());
    }
    toSelfDateStr(timeSpan: number): string {
        let date = new Date(timeSpan);
        let str = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes();
        return str
    }
}

export default ItemData;

