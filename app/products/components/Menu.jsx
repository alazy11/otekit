import Link from "next/link";

export default () => {
    return (
        <nav>
            <Link href='#'>main</Link>
            <Link href='/products'>products</Link>
            <Link href='#'>last</Link>
        </nav>
    );
}