class Good {
    // #available;
    constructor (id, name, description,  sizes, price) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.sizes = sizes;
        this.price = price;
        this.available = 1;
    }
    setAvailable(value) {
        if (value == 1 || value == 0) {
            this.available = value;
        } else {
            console.log("Недопустимый параметр для признака доступности, допустимо 1 или 0")
        }
    }
    get getAvailable() {
        return this.available
    }
}

good1 = new Good (1, "Костюм", "Модный", [48, 50, 52, 54], 8300)
good2 = new Good (2, "Шарф", "Шерсть", ["L", "XL"], 2300)
good3 = new Good (3, "Ботинки", "Черные", [38, 39, 40, 42], 4500)
good4 = new Good (4, "Брюки", "Серые", [48, 50, 52, 54], 3800)
good5 = new Good (5, "Пиджак", "В полосочку", [44, 46, 48, 50], 9000)
good6 = new Good (6, "Футболка", "С логотипом", ["S", "L", "XL", "XXL"], 1300)


class GoodList {
    // #goods;
    constructor (goods, filter, sortPrice, sortDir) {
        this.goods = goods;
        this.filter = filter;
        this.sortPrice = sortPrice;
        this.sortDir = sortDir;
    }
    get list () {
        let sortSwitch = 0
        switch (this.sortDir) {
            case true: 
                sortSwitch = 2;
                break;
            case false: 
                sortSwitch = -2;
                break;
        }    
        if (this.sortPrice == true) {
            const result = this.goods.sort((a, b) => a.price >= b.price ? (-1 + sortSwitch) : (1 - sortSwitch));
            const result2 = result.filter(g => g.available == 1);
            return result2;
        } else {
            return this.goods;
        }
    
    }
}

good1.setAvailable(1)
good2.setAvailable(0)
good3.setAvailable(1)
good4.setAvailable(0)
good5.setAvailable(1)
good6.setAvailable(0)
// goods_All = {1: good1, 2: good2, 3: good3, 4: good4, 5: good5, 6: good6}
goods_All = [good1, good2, good3, good4, good5, good6]
// console.log(goods_All)
goodList1 = new GoodList(goods_All, 1, true, false)
console.log(goodList1)
console.log(goodList1.list)
// goods_All = {1: good1, 2: good2, 3: good3}

// const goodList = [1, 1, 0, 1, 0, 1]

// }

// good1.setAvailable(0)

// console.log(good1.available)
// console.log(good1.available)

// console.log(goods_All)
// console.log(goods_All[2].getAvailable)

// console.log(good1.getAvailable)
// console.log(good2.getAvailable)
// console.log(good3.getAvailable)
// console.log(good4.getAvailable)
// console.log(good5.getAvailable)
// console.log(good6.getAvailable)