import {useState} from "react";

type useAddRemoveType = [number, () => void, () => void]

export const useAddRemoveItem = (): useAddRemoveType => {
    const [itemsQuantity, setItemsQuantity] = useState(0)
    const addItem = () => setItemsQuantity(prev => ++prev)
    const removeItem = () => setItemsQuantity(prev => --prev)

    return [itemsQuantity, addItem, removeItem]
}