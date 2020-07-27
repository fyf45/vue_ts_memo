import DataHelper from './DataHelper';
import ItemData from '../model/ItemData';
import Category from "../model/CateEnum";
class ActionHelper {
    DataHelper: DataHelper = new DataHelper('memoData', 'id');
    memoList: Array<ItemData>;
    constructor() {
        this.memoList = this.readData();
    }
    readData(): Array<ItemData> {
        let arrObj = this.DataHelper.readData();
        arrObj.map((ele: any) => {
            let item: ItemData = new ItemData();
            item.id = ele.id;
            item.cateGoryId = ele.cateGoryId;
            item.content = ele.content;
            item.createTime = ele.createTime;
            return item;
        })
        return arrObj;
    }
    getCategoryName(cateId: Category): string {
        const arrNames = ["工作", "生活", "学习"];
        return arrNames[cateId];
    }
    add(item: ItemData): number {
        item.id = this.DataHelper.addData(item);
        this.memoList.push(item);
        this.DataHelper.saveData(this.memoList);
        return item.id;
    }
    edit(item: ItemData): void {
        let editItem = this.memoList.find(ele => {
            return item.id == ele.id
        })
        if (editItem) {
            editItem.cateGoryId = item.cateGoryId;
            editItem.id = item.id;
            editItem.title = item.title;
            editItem.content = item.content;
        }
        this.DataHelper.saveData(this.memoList);
    }
    remove(id: number): void {
        let index = this.memoList.findIndex(ele => {
            return ele.id = id;
        })
        if (index > -1) {
            this.memoList.splice(index, 1);
            this.DataHelper.saveData(this.memoList);
        }
    }
}
export default ActionHelper;