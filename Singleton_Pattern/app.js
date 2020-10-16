// Standard Singleton Pattern
const Singleton = (() => {
  let instance;

  function createInstance() {
    const object = new Object({ name: "Bird" });
    return object;
  }

  return {
    getInstance: () => {
      if (!instance) {
        if (!(instance instanceof createInstance)) {
          instance = createInstance();
        }
      }
      return instance;
    },
  };
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA === instanceB);
