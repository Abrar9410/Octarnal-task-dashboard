import logo from '../assets/logo.png';

const Logo = ({className}: {className?: string}) => {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            <img src={logo} alt="Donezo" className="w-12" />
            <h1 className="text-2xl font-semibold">
                Donezo
            </h1>
        </div>
    );
};

export default Logo;