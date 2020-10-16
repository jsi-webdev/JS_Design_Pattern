// STANDARD MODULE PATTERN
const UICtrl = (() => {
  let text = "Hello World";

  const changeText = () => {
    const element = document.querySelector("h1");
    element.textContent = text;
  };

  return {
    callChangeText: () => {
      changeText();
    },
  };
})();

UICtrl.callChangeText();
console.log(UICtrl.text);

// REVEALING MODULE PATTERN
const ItemCtrl = (() => {
  let data = [];

  function add(item) {
    data.push(item);
    console.log("Item Added....");
  }

  function get(id) {
    return data.find((item) => {
      return item.id === id;
    });
  }

  return {
    add: add,
    get: get,
  };
})();

ItemCtrl.add({ id: 1, name: "Jhon" });
ItemCtrl.add({ id: 2, name: "Tony" });
console.log(ItemCtrl.get(2));
