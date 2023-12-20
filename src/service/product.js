import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "src", "database", "db.json");

export function getAllProducts() {
  const data = fs.readFileSync(filePath);
 return JSON.parse(data);
}

// export function getcat(data, property){
// let newVal = data.map((curElem)=>{
//   return curElem[property]
//  });
//  console.log(newVal);
//  newVal = [... new Set(newVal)]
//  console.log(newVal)
// }