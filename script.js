
//#1
var person = {
  hungry: true,

  feed: function () {
    if (this.hungry) {
      this.hungry = false;
      alert('Im no longer hungry!');
    }
  }
}

person.feed();

//#2
var pump = function (amount) {
  var liters = liters + amount;
  console.log('You put ' + amount + ' liters in ' + this.name);
};

var garage = {
  car1: {
    name: 'Audi',
    liters: 3,
    fillTank: pump
  },
  car2: {
    name: 'Mercedes',
    liters: 1,
    fillTank: pump
  }
};

garage.car1.fillTank(2);
console.log('Audi should have 5 liters: ', garage.car1.liters);

garage.car2.fillTank(30);
console.log('Mercedes should have 31 liters: ', garage.car2.liters);



//4
var tipJar = {
  coinCount: 20,
  tip: function () {
    this.coinCount += 1;
  },
  stealCoins: function (num) {
    this.coinCount -= num;
  }

};

tipJar.tip();
console.log('Wishing well should have 21 coins: ' + tipJar.coinCount);

tipJar.stealCoins(3);
console.log('Wishing well should have 18 coins: ' + tipJar.coinCount);

tipJar.stealCoins(10);
console.log('Wishing well should have 8 coins: ' + tipJar.coinCount);


//#5

var revealSecret = function () {
  var secret = this.secret;
  return secret;
};

var shoutIt = function (person, func) {
  person.revealItAll = func;
  var result = person.revealItAll();
  alert(person.name + " said: " + result);
};

var avi = {
  name: "Avi",
  secret: "Im scared of snakes!"
};

var narkis = {
  name: "Narkis",
  secret: "I dont have secrets because I'm zen like that."
};

shoutIt(avi, revealSecret);
shoutIt(narkis, revealSecret);

//individual exercise

var coffeeShop = {
  beans: 40,

  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12
  },

  makeDrink: function (drinkType) {
    if (this.drinkRequirements[drinkType] == undefined) {
      alert("Sorry, we don't make " + drinkType);
    }
    else if (this.beans < this.drinkRequirements[drinkType]) {
      alert("Sorry, we're all out of beans!");
    }
    else {
      this.beans -= this.drinkRequirements[drinkType];
      alert(this.beans);
    }
  }
}

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered");
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress");