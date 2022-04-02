import { Fragment } from "react";
import Header from "./Header";

function Page({ title, children }) {
    return (
        <Fragment>
            <Header></Header>
            <h2>{title}</h2>
            <section>{children}</section>
        </Fragment>
    )
};

export default Page;