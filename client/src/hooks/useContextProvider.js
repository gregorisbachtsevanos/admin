import { useContext } from "react";
import { Context } from "../app/context/Context";

export const useContextProvider = () => {
    const context = useContext(Context)

    if (!context) throw new Error("Context not define")

    return context
}