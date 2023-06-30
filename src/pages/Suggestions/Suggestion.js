import React, { useState } from "react";
import axios from "axios";
import Layout from "../../components/Layout/Layout";
import "./Suggestion.css";

const Suggestion = () => {
  const [msg, setMsg] = useState("");

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    setMsg("");
    try {
      alert("Your suggestion have been submitted");
      await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/suggestion`, {
        msg,
      });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Layout title={"Suggestion-FSU"}>
      <div className=" row suggestion-box">
        <form
          onSubmit={formSubmitHandler}
          className="col-xl-5"
          id="suggestion_box"
          action="post"
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
              value={msg}
              onChange={(e) => {
                setMsg(e.target.value);
              }}
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
