import { MyDate } from './../src/backend.js'

describe('MyDate', ()=> {

  test('should return true for a real date', () => {
    let myDate = new MyDate('1984-12-08');
    expect(myDate.dateCheck()).toEqual(4);
  });
});
