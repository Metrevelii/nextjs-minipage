import Link from 'next/Link';

const NewNav = () => {
    return (
        <header>
            <div className="flex justify-center m-auto w-96">
                <nav className="flex justify-around mt-10 w-full">
                    <Link href="/" className="hover:text-darkGrayishBlue">Pokemon</Link>
                    <Link href="/members/band-members" className="hover:text-darkGrayishBlue">Members</Link>
                    <Link href="/bandhistory/main-page" className="hover:text-darkGrayishBlue">History</Link>
                </nav>
            </div>
        </header>
    )
}

export default NewNav;