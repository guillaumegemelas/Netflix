import data from "../data.json";

const Section = () => {
  return (
    <div className="section">
      {/* map pour éviter de saisir x fois la section */}
      {data.map((list, index) => {
        return (
          <div key={index} className="category">
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
      })}
    </div>
  );
};

export default Section;
