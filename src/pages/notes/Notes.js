import React from "react";
import Layout from "../../components/Layout/Layout";

const Notes = () => {
  return (
    <Layout>
      <div className="input-group mb-3 w-50">
        <input
          type="text"
          className="form-control"
          placeholder="Search notes"
          aria-label="Search Notes"
          aria-describedby="basic-addon2"
        />
      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">subject Code:</th>
            <th scope="col">Student</th>
            <th scope="col">Author</th>
            <th scope="col">Type</th>
            <th scope="col">Year</th>
            <th scope="col">Part</th>
            <th scope="col">Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </Layout>
  );
};

export default Notes;
