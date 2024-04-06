export const MessageError = ({
    children,
    mt,
}: {
    children: React.ReactNode;
    mt?: string;
}) => {
    return <p className={`text-red-500 absolute text-sm ${mt}`}>{children}</p>;
};
