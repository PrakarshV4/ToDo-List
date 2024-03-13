import { Item } from "./item";

export function TodosShow({todos}){
    let key = 0;
    // const items = props.data.map(()=>{
    //     return <Item/>
    // })
    return <div className="p-3">
        {todos.map(function(todo){
            key+=1;
            return <div key={key}>
                <h6>{todo}</h6>
            </div>
        })}
        {/* {items} */}
    </div>
}