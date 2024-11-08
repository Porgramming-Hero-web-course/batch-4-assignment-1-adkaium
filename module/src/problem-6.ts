// Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.

 interface Profile {
    name:string;
    age: number;
    email:string;
 }


function updateProfile(profile:Profile, updatePro:Partial<Profile>):Profile{
   return {...profile, ...updatePro}
 }

 const person1:Profile={
    name:'akak',
    age: 34,
    email:'A@gmail.oc'
 }

//  console.log(updateProfile(person1,{name:'abdul'}));