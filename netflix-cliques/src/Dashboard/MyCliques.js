import React, { useState } from "react";
import { Modal } from "atomize";

import NetflixModal from "./NetflixModal"

function MyCliques() {
  const [modal, showModal] = useState(false)

  return(
    <div>
      <div>
        <button onClick={() => showModal(true)}>
          Create New Clique</button>
        <NetflixModal
          isOpen={modal}
          onClose={() => showModal(false)}
        />
      </div>
    </div>
  )
}

export default MyCliques;
