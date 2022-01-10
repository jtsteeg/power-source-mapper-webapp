import React from "react";

const About = () => {
  return (
    <>
      <h3 id="what-problem-does-this-project-solve-">
        What problem does this project solve?
      </h3>
      <p>
        When planning to build a large scale campus (hospital, school,
        datacenter, airport, etc.), a crucial factor is to know how much
        electricity will be needed to support the finished structure, and where
        that electricity is coming from. Now more than ever, decision makers
        need to be cognizent of the fact that new campuses need to be built in a
        region with easy access to renewable energy sources.
      </p>
      <h3 id="how-does-it-solve-the-problem-">
        How does it solve the problem?
      </h3>
      <p>
        The Power Source Mapper pulls and cleans the most recent powerplant data
        from the EIA database and displays it on a map to provide a heuristic
        for decision makers to visually identify the location, capacity, and the
        sustainability of energy sources in a given area.
      </p>
      <h3 id="approach">Approach</h3>
      <p>
        This project was performed in 3 steps with the goal of consolidating
        data from multiple api endpoints into a single database, scrubbing the
        data, and then displaying it on a webapp hosted on the Microsoft Azure
        platform.
      </p>
      <h4 id="part-i-data-aquisition-and-database-creation">
        Part I : Data aquisition and Database creation
      </h4>
      <p>Tools used:</p>
      <p>
        <ul>
          <li>Python</li>
          <li>CosmosDB</li>
        </ul>
        Using Python, I scraped 3 separate EIA endpoints for relevant power
        plant information:
      </p>
      <ol>
        <li>Name</li>
        <li>Latitude/longitude</li>
        <li>Annual output in MWH</li>
        <li>Fuels used</li>
        <li>Primary fuel used</li>
        <li>
          Determination of the sustainability of the primary fuel used by the
          definiton set out by the EIA{" "}
          <a href="https://www.eia.gov/energyexplained/renewable-sources/">
            https://www.eia.gov/energyexplained/renewable-sources/
          </a>{" "}
        </li>
      </ol>

      <p>
        During this process the data was cleaned to prevent listing any
        powerplants that were not in operation by 2020 (the most recent year
        data was available), or that were in operation but had an output of 0
        MWH or less. This data was then consolidated into a JSON file. A
        CosmosDB database is created and will be populated via API that will be
        created next step.
      </p>
      <h4 id="part-ii-backend-and-database-population">
        Part II : Backend and database population
      </h4>
      <p>Tools used:</p>
      <p>
        <ul>
          <li>Python</li>
          <li>Flask</li>
          <li>Azure Functions </li>
        </ul>
        An API was created using python with flask and connected to the CosmosDB
        database. It was created to be the only channel through which the
        database can be accessed or updated, and the POST endpoint checks new
        powerplant submissions for data integrity, the JSON containing the power
        plant data is then uploaded to the DB via the API. JWT tokens are
        implemented here to maintain that only authorized users have
        Create/Update abilities, while read abilities can be performed by anyone
        with access to the endpoint
      </p>
      <h4 id="part-iii-frontend">Part III : Frontend</h4>
      <p>
        Tools used:
        <ul>
          <li>React.js</li>
          <li>Bing maps developer tools</li>
          <li>Azure static web apps</li>
        </ul>
        Bing maps was used to display geographic data on a familiar map
        interface, with green pushpins representing powerplants using
        sustainable fuels while red pushpins represent non-sustainable fuel
        sources. Further plant details are provided in a detailsList to the
        right of the map. This was then deployed to an azure static web app.
      </p>
    </>
  );
};

export default About;
