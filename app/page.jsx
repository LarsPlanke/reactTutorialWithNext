import LikeButton from "./like-button";

// header is child component
function Header ({ title }) {
    console.log(title);
    return (<h1> {title ? title : 'default title'} </h1>); // curly to indicate that its a JS variable // {} to enter JS land - when in JSX land
}

export default function HomePage() {
    const names = ['OLE brum','Ole doffen','Ole Olifsen'];

    return (
        <div>
            <Header title="Develop. Preview. shiiit." />
            <ul> 
                {names.map((name) => (
                    <li key={name}> {name} </li>
                ))}
            </ul>
            <LikeButton />
        </div>
        )
}