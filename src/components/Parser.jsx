import React, { useState } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import "../styles/parser.css";

const Parser = () => {
  const exampleURL = "/6/api/listings/3?sort=desc&limit=10";
  const expectedURL = "/:version/api/:collection/:id";
  const [showSolution, setShowSolution] = useState(false);

  const toggleShowSolution = () => setShowSolution((preState) => !preState);

  const parseURL = (urlKeys, urlValues) => {
    // Getting Keys
    const allKeys = _.split(urlKeys, "/");
    const filterKeys = _.remove(allKeys, (key) => key[0] === ":");
    const keys = filterKeys.map((key) => _.replace(key, ":", "")); // FINAL KEYS ['version', 'collection', 'id']

    // Gettings Values
    const allValues = _.split(urlValues, "/");
    const values = _.remove(allValues, (value) => !allKeys.includes(value));
    const [lastValue] = _.remove(values, (value) => value.includes("?")); // 3?sort=desc&limit=10
    const [valueCollection, optionValues] = _.split(lastValue, "?");

    // Gettings Options
    const [sort, limit] = _.split(optionValues, "&"); //['sort=desc', 'limit=10']
    const [keySort, valueSort] = _.split(sort, "=");
    const [keyLimit, valueLimit] = _.split(limit, "=");
    const finalKeys = [...keys, keySort, keyLimit];
    const finalValeus = [...values, valueCollection, valueSort, valueLimit];

    const result = Object.fromEntries(
      finalKeys.map((_, i) => [finalKeys[i], finalValeus[i]])
    );
    return result;
  };

  const { version, collection, id, sort, limit } = parseURL(
    expectedURL,
    exampleURL
  );

  return (
    <div className="container">
      <h2>URL Parser </h2>
      <div>
        <p>
          URL format string <span>{expectedURL}</span>
        </p>
        <p>
          URL instance <span>{exampleURL}</span>
        </p>
        <button onClick={toggleShowSolution} type="button">
          Solution
        </button>
        {showSolution ? (
          <div className="solution">
            <p>version: {version}</p>
            <p>collection: {collection}</p>
            <p>id: {id}</p>
            <p>sort: {sort}</p>
            <p>limit: {limit}</p>
          </div>
        ) : null}
      </div>
      <Link to="/"> Back</Link>
    </div>
  );
};

export default Parser;
