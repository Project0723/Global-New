import React from "react";
const NewsItems = (props) => {
  let { title, description, imageurl, newsurl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <div style={{
          display: "flex",
          justifyContent: "flex-end",
          position: "absolute",
          right: "0"

        }}>
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        <div className="card-body">
          <img src={imageurl ? imageurl : "https://cdn-icons-png.freepik.com/512/8430/8430135.png"} className="card-img-top" alt="..." />
          <h5 className="card-title">{title}</h5>
          <small className="text-body-secondary"> by {author ? author : "Unknown"} on {new Date(date).toDateString()} </small>

          <p className="card-text">
            {description}
          </p>
          <a href={newsurl} rel="noreferrer" target="_blank" className="btn btn-sm  btn-dark">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default NewsItems;