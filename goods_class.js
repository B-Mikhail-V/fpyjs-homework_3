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
good3 = new Good (3, "Ботинки классика", "Черные", [38, 39, 40, 42], 4500, 1)
good4 = new Good (4, "Костюм спортивный", "Серые", [48, 50, 52, 54], 3800, 1)
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

    add(goodAdd) {
        const idxIs = this.#goods.findIndex(goodIs => goodIs.id == goodAdd.id)
        if (idxIs >= 0) {
            console.log("Товар с id=", goodAdd.id, "уже есть в каталоге")
        } else {
            this.#goods.push(goodAdd)
        }
    }

    remove(idRemove) {
        const idxIs = this.#goods.findIndex(goodIs => goodIs.id == idRemove)
        if (idxIs >= 0) {
            this.#goods.splice(idxIs, 1)
        } else {
            console.log("Товара с id =", idRemove, "в каталоге нет")
        }
    }

}

class BasketGood extends Good {
    constructor (good, size, amount) {
        super (good.id, good.name, good.description, good.sizes, good.price, good.available);
        this.size = size;
        this.amount = amount;
    }
}

class Basket {
    constructor () {
        this.goods = goods
    }

    addGood (basketGood) {
        const idxIs = this.goods.findIndex(goodIs => goodIs.id == basketGood.id)
        if (idxIs >= 0 && this.goods[idxIs].size == basketGood.size) {
            this.goods[idxIs].amount += basketGood.amount
        } else {
            this.goods.push(basketGood)
        }
    }

    clear () {
        this.goods = []
        console.log("Корзина полностью очищена")
    }

    remove (good, size, amount) {
        const idxIs = this.goods.findIndex(goodIs => goodIs.id == good.id && goodIs.size == size)
        if (idxIs >= 0 && this.goods[idxIs].size == size && amount < this.goods[idxIs].amount) {
            this.goods[idxIs].amount -= amount;
        } else if (idxIs >= 0 && this.goods[idxIs].size == size && amount == this.goods[idxIs].amount) {
            this.goods.splice(idxIs, 1);
        } else if (idxIs >= 0 && this.goods[idxIs].size == size && amount > this.goods[idxIs].amount) {
            console.log("Удалить из корзины больше, чем есть не получится, проверьте!");
        } else {
            console.log("Такого товара в каталоге нет");
        }
    }

    removeUnavailable() {
        this.goods = this.goods.filter(good => good.available != 0);
    }

    get totalAmount () {
        const amounts = this.goods.map(good => good.amount)
                        .reduce((total, amount) => total + amount);
        return amounts;
    }

    get totalSum () {
        const sum = this.goods.map(good => good.price * good.amount)
                        .reduce((total, amount) => total + amount);
        return sum;                             
    }



}


good1.setAvailable(1)
good2.setAvailable(1)
good3.setAvailable(0)
good4.setAvailable(1)
good5.setAvailable(1)
good6.setAvailable(0)
good7.setAvailable(1)

// goodsAllIndex = {1: good1, 2: good2, 3: good3, 4: good4, 5: good5, 6: good6};

goodsAll = [good1, good2, good3, good4, good5, good6]
// console.log(goods_All)
goodList1 = new GoodList(goodsAll, /Ру/ig, true, true)
goodList2 = new GoodList(goodsAll, /спорт/ig, true, false)
goodList3 = new GoodList(goodsAll, /для/g, false, true)
// console.log(goodList2.filter)
// console.log(goodList3.list[5].id)

// console.log(goodList2.list)
// goodList1.add(good2)
// console.log(goodList1.list)
// goodList3.remove(5)
// console.log(goodList1.list)

basketGood1 = new BasketGood(good1, 50, 3)
basketGood3 = new BasketGood(good3, 40, 2)
basketGood31 = new BasketGood(good3, 40, 5)
basketGood32 = new BasketGood(good3, 42, 3)
basketGood5 = new BasketGood(good5, 44, 1)
console.log(basketGood1)
// console.log(basketGood2)
goods = [basketGood1, basketGood3]

basket1 = new Basket(goods)
// console.log(basket1)
basket1.addGood(basketGood31)
basket1.addGood(basketGood32)
console.log(basket1)

// basket1.clear()
// console.log(basket1)

// basket1.remove(good3, 42, 3)
// basket1.remove(good3, 40, 4)
// console.log(basket1)


// basket1.removeUnavailable()
// console.log(basket1)

console.log("Общее количество товаров в корзине:", basket1.totalAmount)
console.log("Общая стоимость товаров в корзин:", basket1.totalSum)