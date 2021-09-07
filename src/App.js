import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NewPost from "./components/NewPost";
import PostPage from "./components/PostPage";
import About from "./components/About";
import Missing from "./components/Missing";
import EditPost from "./components/EditPost";
import { Route, Switch } from "react-router-dom";
import { DataProvider } from "./context/DataContext";

function App() {
  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     try {
  //       const response = await api.get("/posts");
  //       setPosts(response.data);
  //     } catch (err) {
  //       if (err.response) {
  //         // Not in 200 response range
  //         console.log(err.response.data);
  //         console.log(err.response.status);
  //         console.log(err.response.headers);
  //       } else {
  //         console.log(err.message);
  //       }
  //     }
  //   };

  //   fetchPosts();
  // }, []);

  return (
    <div className="App">
      <Header title="React JS Blog" />
      <DataProvider>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/post" component={NewPost}></Route>
          <Route path="/edit/:id" component={EditPost}></Route>
          <Route path="/post/:id" component={PostPage}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="*" component={Missing}></Route>
        </Switch>
      </DataProvider>
      <Footer />
    </div>
  );
}

export default App;
