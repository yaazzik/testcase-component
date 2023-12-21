let budget = {
  billOfMaterial: {
    paint: [{name: "blue-green", price: 150}, {name: "yellow", price: 75}],
    plaster: [{name: "finish", price: 450}, {name: "base", price: 280}],
    tools: [{name: "brushes", price: 20}, {name: "palette-knife", price: 30}, {paint: [{name: "blue-green", price: 150}, {name: "yellow", price: 75}]}]
  },
  charge: [{name: "John", price: 800}]
}

let summary = 0
function sumBudget(expenditureItem) {
  //Ваш код здесь. Предполагается любая вложенность элементов в объекте budget.

  if (expenditureItem.price) {
    summary += expenditureItem.price
    console.log(expenditureItem)
  }
  else if (Array.isArray(expenditureItem)) {
    expenditureItem.map(el => sumBudget(el))
  }
  else {
    Object.values(expenditureItem).map(el => sumBudget(el))
  }
  return summary;
}

console.log("budget:", sumBudget(budget));
