import React from 'react';

function Home(props) {
  return (
    <div>
      In React Router v4, you get the history object from props. <br />
      <button type="button" onClick={() => props.history.goBack()}>
        Go back
      </button>
    </div>
  );
}

export default Home
