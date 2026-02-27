import logo from '../assets/logo.png';

const Logo = () => {
    return (
        <div className="flex items-center gap-3">
            <img src={logo} alt="Donezo" className="w-12" />
            <h1 className="text-2xl font-semibold">
                Donezo
            </h1>
        </div>
    );
};

export default Logo;