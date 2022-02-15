interface IContainerProps {
    className?: string;
}

export const Container: React.FC<IContainerProps> = ({ className, children }) => (
    <div className={`container ${className ?? ''}`}>{children}</div>
);