import './App.css';

function App() {

  const Button =( {title, href, onClick}) => {
    let Component ="button";
    const props={};
    if(href) {
      props.href = href;
      Component = "a";
    }
    if(onClick) {
      props.onClick = onClick;
    }
    return <Component  {...props}>{title}</Component>
  }

  return (
    <div className="App">
      <Button 
        title="Click Me"
        href ="https://fullstack.edu.vn"
        onClick={() => console.log(Math.random())}
        ></Button>
     
    </div>
  );
}

export default App;
