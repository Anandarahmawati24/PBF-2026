import {useRouter} from "next/router";
import Navbar from "../navbar";

const disableNavbar = ["/auth/login", "/auth/register","/404"];
type AppshellProps = {
    children: React.ReactNode;
};

const Appshell = (props: AppshellProps) => {
    const {pathname} = useRouter();
    const { children } = props;
    const router = useRouter();
    console.log(router);
    return(
        <main>
            {!disableNavbar.includes(pathname) && <Navbar />}
            {children}
        </main>
    );
};

export default Appshell;