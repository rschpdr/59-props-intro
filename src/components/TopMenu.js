import Button from "./Button";

function TopMenu(props) {
  return (
    <header>
      <h1>Logo</h1>

      <Button font={props.font} color="lightgreen">
        Sign In
      </Button>
      <Button font={props.font} color="lightblue">
        Help
      </Button>
    </header>
  );
}

export default TopMenu;
