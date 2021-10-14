import NavbarHeader from "../navbar/NavbarHeader";
import { ILayautProps } from "./LayautModel";

const Layout = (props: ILayautProps) => {

    return (
        <div>
            <NavbarHeader />
            <main>{props.children}</main>
        </div>
    );
};

export default Layout;