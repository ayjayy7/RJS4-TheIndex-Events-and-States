import React from "react";

// Components
import AuthorCard from "./AuthorCard";

function AuthorsList(props) {
  const authorCards = props.authors.map(author => (
    <AuthorCard selectAuthor={props.selectAuthor} key={author.first_name + author.last_name} author={author} />
  ));

  return (
    <div className="authors">
      <h3>Authors</h3>
      <div className="row">{authorCards}</div>
    </div>
  );
}

export default AuthorsList;
