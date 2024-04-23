import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Doraemon']);
        
    const onAddCategory = (newCategory) =>{
        //categories.push('Valorant');
        //setCategories([...categories, 'Valorant']);
        //setCategories(cat =>[...cat, 'Valorant']);
        // setCategories(['Valorant',...categories]);
        // categories.push(newCategory);
        // console.log(newCategory);
        if (categories.includes (newCategory)){
            return;
        }
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
            // setCategories={setCategories}
                onNewCategory={event =>onAddCategory(event)}
                currentCategories = {categories}
            />

            {/* <button onClick={onAddCategory}>Agregar</button> */}

          
                {
                    categories.map((category) =>(
                        // return <li key={category}>{category}</li>
                        // return (
                        //     <div key={category}>
                        //         <h3>{category}</h3>
                        //         <li>{category}</li>
                        //     </div>
                        // )
                        <GifGrid key={category} category={category}/>
                    ))
                }
                {/* <li>ABC</li>
                <li>123</li>
                <li>XYZ</li> */}
      
        </>
    )
}
