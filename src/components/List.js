import React from "react";
import ListItem from "./ListItem";

export function List() {
  return (
    <>
      <div class="container">
        <section class="main-body">
          {this.state.cats.map((cat) => {
            return <ListItem />;
          })}
        </section>
        <Footer />
      </div>
    </>
  );
}

export default List;
