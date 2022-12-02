import React, { createContext, useReducer, useContext } from "react"
import { order } from "./reduser";

const context = createContext();

const Item = ({ children }) => {
    const products = [{
        id:1,
        name: "Idly",
        image: "https://cdn.pixabay.com/photo/2017/06/16/11/38/breakfast-2408818_960_720.jpg"
    }, {id:2,
        name: "Dosa",
        image: "https://wallpaperaccess.com/full/6340448.jpg"
    },
    {id:3,
        name: "Roti",
        image: "https://media.istockphoto.com/id/968309596/photo/indian-food-or-indian-curry-in-a-copper-brass-serving-bowl-with-bread-or-roti.jpg?s=612x612&w=0&k=20&c=rl0JYh33uiM0LI9Op_s0Twzw0a9fqWblvbkWQUrjibo="
    },
    {id:4,
        name: "MiniTiffin",
        image: "https://www.jeyashriskitchen.com/wp-content/uploads/2015/06/saravana-bhavan-style-mini-tiffin.jpg"
    },
    {id:5,
        name: "Burger",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3vmJiEgTK_prpwkB6BXTdACyQyJeewXzfXg&usqp=CAU"
    },
    {id:6,
        name: "Snadwich",
        image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F1556744250%2Fthe-ultimate-veggie-sandwich-1905.jpg%3Fitok%3D1ip9ZNIm"
    }]
    const [state, dispatch] = useReducer(order, {
        products: products,
        Item: [],
    });
    return (
        <context.Provider value={{ state, dispatch }}>{children}</context.Provider>
    )


}

export const Orderstate = () => {
    return useContext(context);
};
export default Item;