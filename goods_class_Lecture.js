class Good {
    constructor (x, y) {
        this.x = x;
        this.y = y;
    }
    move (dx, dy) {
        this.x += dx;
        this.y += dy;
    } 

    static from (obj) {
        const {x, y} = obj;
        return new Good (x, y);

    }

}

g1 = new Good(2, 7)
console.log(g1.y)
console.log(g1)
// g1.move(5, 10)
// console.log(g1)
// console.log(g2)
const g3 = Good.from(g1)
console.log("новый", g3)

Good.prototype.extend = function(dd) {
    this.x *= dd;
    
}
g1.extend(100)
g3.extend(50)
console.log(g1)
console.log(g3)
