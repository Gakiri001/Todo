import React from "react";

function intro() {
  //Data Types
  let name: String;
  let age: number;
  let isStudent: boolean;
  let hobbies: string[];
  let role: [number, string];
  role = [4, "Kenya"];

  //Object -> Type Aliases
  type Person = {
    name: string;
    age?: number;
  };

  let person: Person = {
    name: "Julius",
    age: 4,
  };

  console.log(person);

  type Person1 = Person & {
    identity: string;
    span?: number;
  };

  let person1: Person1 = {
    identity: "Boy",
    span: 4,
    name: "Irungu",
    age: 45,
  };

  console.log("person1", person1);

  //Interface
  interface Someone {
    name: string;
    age?: number;
  }

  interface Guy extends Someone {
    profession: String;
  }

  let someone: Someone = {
    name: "Gakiri",
    age: 5,
  };

  let guy: Guy = {
    profession: "Engineer",
    name: "John",
    age: 99,
  };

  console.log(someone);
  console.log("Guy", guy);

  let lotsOfPeople: Person[];

  //Union
  let value: String | Number;

  value = 100;
  value = "KSh. 100";

  function PrintName(jina: string) {
    console.log(jina);
  }
  PrintName("Julius Ceasar");

  let printAge: (miaka: number) => number;
  return <div>intro</div>;
}

export default intro;
