import { sum } from "../business/sum"
const numbers = [-1,-1,-1];
export function World (){
  return(
    <div>
      Nesse componente a soma dos valores {" "}
      <strong>
        {numbers.join(" + ")} = {sum(...numbers)}
      </strong>
    </div>
  )
}