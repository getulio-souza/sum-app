import { sum } from "../business/sum";

const numbers = [1,1,1];

export function Hello (){
  return (
    <div>
    a soma dos números {""}
    <strong>
      {numbers.join(" +")} = {sum(...numbers)}
    </strong>
    </div>  
  )
}