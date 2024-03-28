import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) =>{

    const dispatch = useDispatch();

    const handleaddItem = (item) => {
        dispatch(addItem(item))

    }

    return(
        <div>
            <ul>
                {items.map(item=>(
                    <div key={item.card.info.id} className="p-2 m-2  border-gray-200 border-b-2 text-left flex">
                       
                        <div>
                            <div>
                                
                                <span>{item.card.info.name}</span>
                                <span> - Rs {item.card.info.price/100 || item.card.info.defaultPrice/100}</span>
                            </div>
                        </div>
                       
                        <p className="text-xs">{item.card.info.description}</p>
                        <div>
                            <img src={CDN_URL + item.card.info.imageId} className="w-[120px]"/>
                            <button className="p-2 bg-white shadow-lg absolute m-auto" onClick={()=>handleaddItem(item)}>Add +</button>
                        </div>    
                    </div>
                    ))}
            </ul>
        </div>

    )

}

export default ItemList;