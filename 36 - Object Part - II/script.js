// why cant we change the value of pi - 3.141592653589793  to 3 or 4 ie to whole number
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);
// console.log(Math.PI);

const chai = {
  name: `Adrak wali Chai`,
  price: 10,
};

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
Object.defineProperty(chai, "name", {
  enumerable: true,
});
// agar enumerable ko true kar de rahe hai toh object mei iterate kar rah ahai and values aa raha hai but jais ehi false kar de rhae hai toh nahi aa raha hai

for (let [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
