import { saveToken } from "@/redux/states/token";
import { useDispatch } from "react-redux";

export const saveTokenInStorage = (result: string) => {
    const dispatch = useDispatch();
    const data = { result };

};