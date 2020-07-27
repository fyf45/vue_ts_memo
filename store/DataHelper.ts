import ItemData from '../model/ItemData';
class DataHelper {
    dataKey: string;
    primaryKey: string;
    constructor(dataKey: string, primaryKey: string) {
        this.dataKey = dataKey;
        this.primaryKey = primaryKey;
    }
    readData(): any {
        let strData: string | null = localStorage.getItem(this.dataKey);
        let arrData: any[] = [];
        if (strData != null) {
            arrData = JSON.parse(strData);
        }
        return arrData;
    }
    saveData(arrData: Array<Object>): void {
        let str: string = JSON.stringify(arrData);
        localStorage.setItem(this.dataKey, str);
    }
    addData(newDataObj: any): number {
        let arr: any[] = this.readData();
        let newId: number = arr.length > 0 ? arr[arr.length - 1][this.primaryKey] + 1 : 1;
        newDataObj[this.primaryKey] = newId;
        arr.push(newDataObj);
        return newId;
    }
    deleteData(id: string | number): boolean {
        let arr = this.readData();
        let index = arr.findIndex((ele: any) => {
            return ele[this.primaryKey] == id;
        })
        if (index > -1) {
            arr.splice(index, 1);
            this.saveData(arr);
            return true;
        }
        return false;
    }
}
export default DataHelper;