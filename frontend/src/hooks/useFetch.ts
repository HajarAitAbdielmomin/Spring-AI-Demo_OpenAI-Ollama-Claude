import { useState } from "react";

type FetchState<T> = {
    data?: T;
    loading: boolean;
    error?: string;
    duration?: number;
    tokens?: number;
};

export function useFetch<T>() {
    const [state, setState] = useState<FetchState<T>>({ loading: false });

    const fetchData = async (url: string) => {
        const start = performance.now();
        setState({ loading: true });

        try {
            const res = await fetch(url);
            if (!res.ok) throw new Error();

            const text = await res.text();
            const end = performance.now();

            const tokenCount = text.split(/\s+/).length;

            setState({
                loading: false,
                data: text as T,
                duration: Math.round(end - start),
                tokens: tokenCount
            });

            return text as T;
        } catch {
            setState({ loading: false, error: "Request failed" });
            throw new Error();
        }
    };

    return { ...state, fetchData };
}
