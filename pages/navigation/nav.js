import Link from 'next/link';

const NewNav = () => {
    return (
        <header>
            <div className="flex justify-center m-auto w-96">
                <nav className="flex justify-around mt-10 w-full">
                    <Link href="/" className="hover:text-darkGrayishBlue">Home</Link>
                    <Link href="/members/band-members" className="hover:text-darkGrayishBlue">Members</Link>
                    <Link href="/gallery/gallery" className="hover:text-darkGrayishBlue">Gallery</Link>
                </nav>
            </div>
        </header>
    )
}

export default NewNav;