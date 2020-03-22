
const _more = () => {
    value = 0;
    return (add) => {
        value += add;
        return value;
    }
}

const more = _more();



describe('Closure', () => {
    it('normal', () => {
        expect(more(2)).toBe(2);
    })
    it('normal 2', () => {
        expect(more(-1)).toBe(1);
    })
})