import {useSearchParams} from "react-router-dom";
import {ChangeEvent} from "react";

const usePageQuery = () => {
    const [query, setQuery] = useSearchParams({page: "1"});

    const page = query.get("page");

    return {
        page,
        changePage: (event: ChangeEvent<unknown>, page: number) => {
            if (page > 500) {
                page = 500;
            }
            setQuery({page: page.toString()});
        }
    }
}

export {usePageQuery}