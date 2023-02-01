// import data from "../data.json";

const Section = ({ list }) => {
  return (
    <div className="category">
      <h1>{list.category}</h1>
      <div className="pictures">
        {list.images.map((picture, num) => {
          console.log(picture);
          return (
            <div key={num} className="pictures1">
              <img src={picture} alt="images" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Section;
