import './App.css';
import Header from "./Header";
import PostForm from "./PostForm";
import Post from "./Post";
import Avatar from "./Avatar";

const posts = [
    {
        userName: "Tiago Gouvêa",
        date: "13 Oct 2021 - 20:21",
        message: "Maneiro essa coisa!",
        comments: [
            {
                userName: "Baraky",
                date: "13 Oct 2021 - 20:33",
                message: "Concordo"
            },
            {
                userName: "Helena Lannes",
                date: "13 Oct 2021 - 20:35",
                message: "Coloca TypeScript"
            }
        ]
    },
    {
        userName: "Baraky",
        date: "13 Oct 2021 - 20:48",
        message: "Eu gosto de dar spoiler"
    },
];

posts.push(
    {
        userName: "Guilherme Rodrigues",
        date: "13 oct 2021 - 20:30",
        message: "Dá pra mudar a const??"
    }
);

// console.log(posts);
// console.log(firstPost);

function App() {
    return (
        <div className="App">
            <Header/>
            {/*<Avatar/>*/}
            <PostForm/>
            {posts.map(post=>{
                // Cada post é um item do array de posts
                return <Post data={post}/>
            })}
        </div>
    );
}

export default App;
