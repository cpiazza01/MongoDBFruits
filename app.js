const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", { useUnifiedTopology: true,
useNewUrlParser: true,
});

const fruitSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true, "You didnt enter a fruit name"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const personSchema = new mongoose.Schema ({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});

const Fruit = mongoose.model("Fruit", fruitSchema);
const Person = mongoose.model("Person", personSchema);

// const pineapple = new Fruit({
//   name: "Pineapple",
//   score: 9,
//   review: "Great fruit."
// });
// pineapple.save();

// const fruit = new Fruit ({
//   name: "Apple",
//   rating: 7,
//   review: "Pretty solid as a fruit."
// });

// const person = new Person ({
//   name: "Amy",
//   age: 12,
//   favoriteFruit: pineapple
// });
// person.save();
//
// const kiwi = new Fruit ({
//   name: "Kiwi",
//   score: 10,
//   review: "The best fruit!"
// });
// //
// // const orange = new Fruit ({
// //   name: "Orange",
// //   score: 4,
// //   review: "Too sour for me"
// // });
// //
// // const banana = new Fruit ({
// //   name: "Banana",
// //   score: 3,
// //   review: "Weird texture."
// // });
//
// // Fruit.insertMany([kiwi, orange, banana], function(err) {
// //   if (err) {
// //     console.log(err);
// //   } else {
// //     console.log("Successfully logged all of the fruits to the fruitsDB.");
// //   }
// // });
//
// //person.save();
// // fruit.save();
//
// Fruit.find(function(err, fruits) {
//   if (err) {
//     console.log(err);
//   }else {
//     mongoose.connection.close();
//     fruits.forEach(function(fruit) {
//       console.log(fruit.name);
//     });
//   }
// });
//
// // Fruit.deleteMany({name: "Apple"}, function(err) {
// //   if (err) {
// //     console.log(err);
// //   } else {
// //     console.log("Deleted all the apples");
// //   }
// // });
//
//
// Person.updateOne({name: "John"}, {
//   favoriteFruit: kiwi
// }, function(err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully updated the document!");
//   }
// })
