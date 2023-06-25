import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import "./Suggestion.css";
import { async } from "q";

const Suggestion = () => {
  const [userData, setUserData] = useState("");

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    // const res = await fetch("/", {
    //   method: "post",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ userData }),
    // });
    // const response = await res.json();
    setUserData("");
  };

  const inputHandler = (e) => {
    setUserData(e.target.value);
    console.log(userData);
  };

  return (
    <Layout>
      <div className=" row suggestion-box">
        <form
          onSubmit={formSubmitHandler}
          className="col-xl-5"
          id="suggestion_box"
          method="post"
        >
          <h3>Suggestion Box</h3>

          <p>
            If you have any suggestions or queries, feel free to fill the
            suggestion box
          </p>

          <fieldset>
            <textarea
              rows="6"
              cols="30"
              placeholder="Suggestion"
              tabIndex="5"
              name="suggestion_text"
              required
              value={userData}
              onChange={inputHandler}
            ></textarea>
          </fieldset>
          <fieldset>
            <button
              name="submit"
              type="submit"
              id="suggestion_box"
              data-submit="...Sending"
              value="text to send"
            >
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </Layout>
  );
};

export default Suggestion;
