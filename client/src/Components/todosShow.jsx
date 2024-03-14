import { Item } from "./item";

export function TodosShow({todos,removeTodo}){
    let key = 0;
    // const items = props.data.map(()=>{
    //     return <Item/>
    // })
    return <div className="p-3">
        {todos.map((item,index)=>{
            return <Item key={index} id={index} item={item} removeTodo={removeTodo} />
            
        })}
        {/* {items} */}
    </div>
}