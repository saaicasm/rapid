import { PartsContext } from "../context/PartsContext";
import { useContext } from "react";

export const usePartsContext = () => {
    const context = useContext(PartsContext);

    if(!context){
        throw new Error('usePartsContext must be used within a PartsContextProvider');
    }

    return context;
}