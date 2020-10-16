function MemberFactory() {
  this.createMember = (name, type) => {
    let member;

    if (type === "simple") {
      member = new SimpleMembership(name);
    } else if (type === "standard") {
      member = new StandardMembership(name);
    } else if (type === "super") {
      member = new SuperMembership(name);
    }

    member.type = type;

    member.define = function () {
      console.log(`${this.name} (${this.type}) : (${this.cost})`);
    }; // = 으로 정의 시 arrow function은 쓰지 말 것

    return member;
  };
}

const SimpleMembership = function (name) {
  this.name = name;
  this.cost = "$5";
};

const StandardMembership = function (name) {
  this.name = name;
  this.cost = "$15";
};

const SuperMembership = function (name) {
  this.name = name;
  this.cost = "$30";
};

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember("Juny", "simple"));
members.push(factory.createMember("Tony", "standard"));
members.push(factory.createMember("Sunwoo", "super"));

members.forEach((member) => {
  member.define();
});
