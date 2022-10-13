export default function MembersWrapper(props) {
    return (
        <div className="flex flex-col justify-center mt-20 space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            {props.children}
        </div>
    )
}