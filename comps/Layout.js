import NewNaw from '../pages/navigation/nav';

const Layout = ({ children }) => {
    return (
        <div>
            <NewNaw />
            { children }
        </div>
    );
}

export default Layout;