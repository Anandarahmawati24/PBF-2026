import {useRouter} from "next/router";
//import Navbar from "../navbar";
import { Montserrat } from "next/font/google";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../navbar"), {
  loading: () => <p>Loading Navbar...</p>,ssr: false, });
const disableNavbar = ["/auth/login", "/auth/register","/404"];
type AppshellProps = {
    children: React.ReactNode;
};

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});

const Appshell = (props: AppshellProps) => {
    const {pathname} = useRouter();
    const { children } = props;
    //const router = useRouter();
   // console.log(router);
    return(
        <main className={montserrat.className}>
            {!disableNavbar.includes(pathname) && <Navbar />}
            {children}
        </main>
    );
};

export default Appshell;