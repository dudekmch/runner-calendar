import NavbarWrapper from "../navbar/NavbarWrapper";
import { ILayautProps } from "./LayautModel";

const Layout = (props: ILayautProps) => {
   

    return (
        <div>
            <NavbarWrapper />
            <main>{props.children}</main>
        </div>
    );
};

export default Layout;