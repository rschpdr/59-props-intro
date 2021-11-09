import TopMenu from "./TopMenu";
import Container from "./Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import AdoptionList from "./AdoptionList";

const fontFamily = "'Roboto', sans-serif";

function App() {
  return (
    <div>
      <TopMenu font={fontFamily} />
      <Container>
        <h1>Welcome to React</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum
          justo vitae elit faucibus, in dapibus velit sagittis. Cras porttitor
          faucibus sem nec porta. Nullam finibus fringilla metus sed efficitur.
          Mauris ac mi sed magna vehicula posuere sit amet sit amet sapien. Ut
          vestibulum interdum nunc, nec consequat erat dictum id. Sed nec felis
          lectus. Nulla scelerisque sollicitudin mi quis maximus. Nullam
          lobortis dignissim est id vestibulum. Praesent eget elit ac massa
          hendrerit convallis. Nulla mauris quam, suscipit sit amet dui vel,
          luctus lacinia ipsum. In venenatis nisl velit. Nullam eu mattis elit.
        </p>

        <img
          src="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZG9nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
          alt="dog"
          style={{ height: "200px", width: "auto" }}
        />

        <div className="mt-3">
          <AdoptionList />
        </div>
      </Container>
    </div>
  );
}

export default App;
