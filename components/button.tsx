



export default function Button(
    {
        onClick,
        className,
        children
    }: {
        onClick?: (_: any) => void;
        className?: string;
        children: React.ReactNode;

    }
) {
    return (
        <div onClick={onClick ?? (() => {})} className={`flex flex-row items-center justify-center px-4 py-2 bg-blue-800/5 rounded-md hover:scale-105 active:scale-95 hover:bg-blue-800/10 hover:cursor-pointer transition-all duration-200 ${className ?? ""}`}>
            { children }
        </div>
    );
}