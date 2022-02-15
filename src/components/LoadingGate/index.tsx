interface ILoadingGateProps {
    waitFor: boolean;
    meanWhile: React.ReactNode;
}

export const LoadingGate: React.FC<ILoadingGateProps> = ({
    waitFor,
    meanWhile,
    children,
}) => <>{waitFor ? children : meanWhile} </>;