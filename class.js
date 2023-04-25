class ExampleOne {
  constructor(dataType, itemToFind, array) {
    this.dataType = dataType;
    this.itemToFind = itemToFind;
    this.array = array;
  }
  process() {
    if (this.isDataTypeMatched() && this.isItemExist()) {
      console.log(`"${this.itemToFind}"는 배열에 존재합니다.`);
      return true;
    } else {
      console.log(`"${this.itemToFind}"는 배열에 존재하지 않습니다.`);
      return false;
    }
  }
  isDataTypeMatched() {
    return typeof this.itemToFind === this.dataType;
  }

  isItemExist() {
    return this.array.includes(this.itemToFind);
  }
}
const basicData = ["안녕하세요", "어디선가", "입력된", "데이터를", "찾아보는", "함수입니다"];
// const example = new ExampleOne("string", "흰 세상", basicData); 
const example = new ExampleOne("string", "어디선가", basicData); 
example.process();
