import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch',]);

    // const handleAdd = () => {
    //     setCategories(
    //         [...categories,'HunterXHunter']
    //     );

    //     // O de esta forma
    //     //setCategories(category => [...category,'HunterXHunter']);
    // }

    return (
        <>
            <h2>
                GifExpertApp
            </h2>
            <AddCategory setCategories={setCategories}/>
            <hr></hr>

            <ol>
                {
                    categories.map( category => 
                    <GifGrid
                    key={category}
                    category={category} 
                    />
                    )
                }

            </ol>
        </>
    );
    
}

export default GifExpertApp;