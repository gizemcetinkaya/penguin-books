interface ButtonProps {
    type: "button" | "submit";
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
    className: string;
    children: React.ReactNode;
    disabled?: boolean
}

const Button = ({ type, onClick, children, className, disabled }: ButtonProps) => {
    return (
        <button className={className} type={type} onClick={onClick} disabled={disabled}>{children}</button>
    );
};

export default Button;