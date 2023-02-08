import { useState } from "react";

export const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    const handleAdd = () => {
        setCategories(
            [...categories,'HunterXHunter']
        );

        // O de esta forma
        //setCategories(category => [...category,'HunterXHunter']);

    }

    return (
        <>
            <h2>
                GifExpertApp
            </h2>
            <hr></hr>
            <button onClick={handleAdd}>Agregar</button>
            <ol>
                {
                    categories.map( category => {
                        return <li key={category}> {category} </li>;
                    } )
                }

            </ol>
        </>
    );
    
}

export default GifExpertApp;