import { renderHook, act } from "@testing-library/react";
import { useLocalStorage } from "../hooks/useLocalStorage";

test("useLocalStorage saves and reads data properly", () => {
    const defaultValue = [1, 2, 3, 4, 5];
    const { result } = renderHook(() =>
        useLocalStorage("example_key", defaultValue)
    );

    const setJSONTOLocalStorage = result.current[1];
    expect(result.current[0]).toEqual([1, 2, 3, 4, 5]);

    act(() => {
        setJSONTOLocalStorage("example_string");
    });

    expect(result.current[0]).toEqual("example_string");
});
