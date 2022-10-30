function SplitCard(props) {
    return (
      <div className="SplitCard">
        <div className="SplitCard-left">
          {props.left}
        </div>
        <div className="SplitCard-right">
          {props.right}
        </div>
      </div>
    );
  }
  
  function CardComponent(props) {
    return (
        <SplitCard
          left={
            <div className="Picture">
      <img  
          src={props.image} 
          alt={props.title} 
        />
      </div>
          }
          right={
            <div className="Text">
        {props.message}
        </div>
          } />
      );
  }

export default CardComponent;