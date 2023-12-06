// LoggedInContent.js
import React from 'react';

function LoggedInContent({ username }) {
     const goBack = () => {
     window.history.back()
    };

  return (
    <>
      <main>
        <div>
          <h5 id="user-info">Logged in as: {username}</h5>
        </div>

        <form method="post" enctype="multipart/form-data">
          <div>
            <label htmlFor="file">Choose file to upload</label>
            <input type="file" id="file" name="file" multiple />
          </div>

          <div>
            <button type="submit">Submit</button>
          </div>
        </form>

        <div>
          <a href="https://www.w3schools.com/tags/att_script_src.asp" onClick={goBack}>Back</a>
        </div>
      </main>

      <script>
        document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("user-info").innerText = "Logged in as: " + "{username}"});
      </script>
    </>
  );
};

export default LoggedInContent;
