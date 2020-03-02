Array.prototype.unique = function() {
    const uniqueArr = [];
    for (let i=0; i<this.length; i++) {
            if (!uniqueArr.find(a => a === this[i])) uniqueArr.push(this[i]);
    }
    return uniqueArr;
}
Array.prototype.uniqueSort = function(func) {
    return this.unique().sort(func);
}
describe('Unique Sort', () => {

    it('short', () => {
        let arr = [3,3,5,5,4,2,2];
        expect(arr.uniqueSort((a,b) => a-b)).toEqual([2,3,4,5]);
    })
    it('long', () => {
        let arr = [3,6,5,5,5,2,1,1,11,1,4,6];
        expect(arr.uniqueSort((a,b) => b-a)).toEqual([11,6,5,4,3,2,1]);

    })
})