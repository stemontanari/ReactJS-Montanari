import React, {useState, useEffect} from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { DotSpinner } from '@uiball/loaders'

import getItems, { getItemsByCategory } from "../../services/mockAPI"


function ItemListContainer(props) {
    let {greeting} = props;
    let [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const {cat} = useParams();

    useEffect(() => {
        if (cat === undefined){
            getItems().then((respuestaDatos) => setData(respuestaDatos))
            .finally(() =>  setIsLoading(false))
        }
        else {
            getItemsByCategory(cat)
            .then((respuestaDatos) => setData(respuestaDatos))
            .finally(() =>  setIsLoading(false))
        }
        },[cat])

    return (
        <div>
            {
               isLoading && <h3 className='error'> <DotSpinner size={70} speed={0.8} color="#BBA44F" /> </h3>
            }
            <h1> {greeting}</h1>
            <div className="main container">
                <ItemList data={data}/>
            </div>
        </div>
    );
}

export default ItemListContainer;

  