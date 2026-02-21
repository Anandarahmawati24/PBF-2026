import Navbar from "../navbar";

type AppshellProps = {
    children: React.ReactNode;
};

const Appshell = (props: AppshellProps) => {
    const { children } = props;
    return(
        <main>
            <Navbar />
            {children}
            <div className="footer">
                Footer
            </div>
        </main>
    );
};

export default Appshell;