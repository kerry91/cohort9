function Button(props) {
    return (
      <button className={'Button-' + props.styling}>
        {props.children}
      </button>
    );
  }
  
  function ButtonComponent() {
    return (
        <Button styling="Properties">
            Hello
        </Button>
    );
  }

export default ButtonComponent;