import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Highlight from "./ui/highlight";

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose <span className="purple">Library</span>
          </h2>
          <div className="highlight__wrapper">
            <Highlight
              icon={<FontAwesomeIcon icon="bolt" />}
              title={<h3 className="highlight__subtitle"> Easy and Quick</h3>}
              para={
                <p className="highlight__para">
                  Get access to the book you purchased online instantly.
                </p>
              }
            />

            <Highlight
              icon={<FontAwesomeIcon icon="book-open" />}
              title={"10,000+ Books"}
              para={"Library has books in all your favorite categories"}
            />

            <Highlight
              icon={<FontAwesomeIcon icon="tags" />}
              title={"Affordable"}
              para={"Get your hands on popular books for as little as $10"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
