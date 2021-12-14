import { of } from "rxjs"

of(2, "yasin", ["test"], { ad: "yasin" }, [{ ad: "aaa" }], true).subscribe((item) => {
    console.log("abone olunan eleman", item)
})