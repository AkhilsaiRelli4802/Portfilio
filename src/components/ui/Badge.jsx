const Badge = ({ children, className = "" }) => {
    return (
        <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-zinc-800/50 text-zinc-300 border border-zinc-700/50 ${className}`}
        >
            {children}
        </span>
    );
};

export default Badge;
