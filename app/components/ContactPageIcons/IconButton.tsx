import Link from "next/link";
interface Props {
    href: string,
    children?: React.ReactNode
}

const IconButton: React.FC<Props> = ({ href, children }) => {
    return (
        <span className={`w-16 h-16 bg-white rounded-full pt-[10px] pl-[10px] drop-shadow-xl`}>
            <Link href={href}>
                {children}
            </Link>
        </span>
    )
}

export default IconButton
