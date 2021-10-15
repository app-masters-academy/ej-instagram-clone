import "./App.css";
import Header from "./components/Header";
import Post from "./components/Post";
import CommentForm from "./components/CommentForm";
import Colors from "./styles/colors";

const posts = [
  {
    userName: "Tiago Gouvêa",
    date: "13 Oct 2021 - 20:21",
    message: "Maneiro essa coisa!",
    image: "/assets/paisagem.jpg",
    comments: [
      {
        userName: "Baraky",
        date: "13 Oct 2021 - 20:33",
        message: "Concordo",
      },
      {
        userName: "Helena Lannes",
        date: "13 Oct 2021 - 20:35",
        message: "Coloca TypeScript",
      },
    ],
  },
  {
    userName: "Baraky",
    date: "13 Oct 2021 - 20:48",
    message: "Eu gosto de dar spoiler",
  },
];

posts.push({
  userName: "Guilherme Rodrigues",
  date: "13 oct 2021 - 20:30",
  message: "Dá pra mudar a const??",
});

function App() {
  return (
    <div>
      <div
        style={{
          width: "100vw",
          backgroundColor: "white",
          borderBottom: `1px solid ${Colors.darkBorder}`,
          marginBottom: "40px",
        }}
      >
        <Header />
      </div>
      <div style={{ maxWidth: "614px", margin: "auto" }}>
        <CommentForm
          style={{
            border: `1px solid ${Colors.darkBorder}`,
            backgroundColor: "white",
          }}
          buttonColor={Colors.red}
          placeholder="Faça uma publicação"
          buttonText="Publicar"
        />
        {posts.map((post) => (
          <Post data={post} />
        ))}
      </div>
    </div>
  );
}

export default App;
