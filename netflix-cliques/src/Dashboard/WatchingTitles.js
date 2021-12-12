import React, { useState } from "react";
import NetflixModal from "./NetflixModal"
import { Modal } from "atomize";

function WatchingTitles() {
  const [modal, showModal] = useState(false)

  return(
    <div>
      <div>
        <button onClick={() => showModal(true)}>
          Add Netflix Title</button>
        <NetflixModal
          isOpen={modal}
          onClose={() => showModal(false)}
        />
      </div>
    </div>
  )
}

export default WatchingTitles;
