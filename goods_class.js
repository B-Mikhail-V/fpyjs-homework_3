class Good {
    constructor (id, name, description,  sizes, price, available) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.sizes = sizes;
        this.price = price;
        this.available = available;
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

good1 = new Good (1, "Костюм", "Модный", [48, 50, 52, 54], 8300, 1)
good2 = new Good (2, "Рукавицы для прогулок", "Шерсть", ["L", "XL"], 2300, 1)
good3 = new Good (3, "Ботинки классика", "Черные", [38, 39, 40, 42], 4500, 0)
good4 = new Good (4, "Костюм спортивный", "Серые", [48, 50, 52, 54], 3800, 0)
good5 = new Good (5, "Рубашка", "В полосочку", [44, 46, 48, 50], 9000, 1)
good6 = new Good (6, "Футболка спортивная", "С логотипом", ["S", "L", "XL", "XXL"], 1300, 1)
good7 = new Good (7, "Ботинки для похода", "Крепкие", [40, 41, 43, 45], 3900, 1)


class GoodList {
   #goods;
    constructor (goods, filter, sortPrice, sortDir) {
        this.#goods = goods;
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
            const regFilter = this.filter;
            const result = this.#goods.sort((a, b) => a.price >= b.price ? (-1 + sortSwitch) : (1 - sortSwitch))
                            .filter(good => good.available == 1 && regFilter.test(good.name))
                            
            return result;
        } else {
            return this.#goods;
        }
    
    }

    add(good) {
        let arr = [];
        for (let i = 0; i < this.#goods.length; i++) {
            arr.push(this.#goods[i].id)
        }
        if (arr.includes(good.id)) {
            console.log("Товар c id=", good.id, "уже есть в каталоге!")
        } else {
            this.#goods.push(good)
        }
    }

    remove(idRemove) {
        if (Object.keys(this.#goods).includes(idRemove)) {
            this.#goods.splice(id, 1)
        }
    }

}




good1.setAvailable(1)
good2.setAvailable(1)
good3.setAvailable(1)
good4.setAvailable(1)
good5.setAvailable(1)
good6.setAvailable(1)
good7.setAvailable(1)

goodsAllIndex = {1: good1, 2: good2, 3: good3, 4: good4, 5: good5, 6: good6};

goodsAll = [good1, good2, good3, good4, good5, good6]
// console.log(goods_All)
goodList1 = new GoodList(goodsAll, /Ру/ig, true, true)
goodList2 = new GoodList(goodsAll, /спорт/ig, true, false)
goodList3 = new GoodList(goodsAllIndex, /для/g, false, true)
// console.log(goodList2.filter)
// console.log(goodList3.list[5].id)

// console.log(goodList3.list)
// goodList3.add(good7)
// console.log(goodList3.list)
goodList3.remove(3)
console.log(goodList3.list)


// console.log(goodList2.list)
// goods_All = {1: good1, 2: good2, 3: good3}

// const goodList = [1, 1, 0, 1, 0, 1]
