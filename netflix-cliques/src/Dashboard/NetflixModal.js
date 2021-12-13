import React, { useState } from "react";
import { Modal, Icon, Text } from "atomize";

function NetflixModal({ isOpen, onClose }) {

  return(
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      rounded="sm"
      h="12rem"
      maxW="72rem"
    >
    <Icon
      name="Cross"
      pos="absolute"
      top="1rem"
      right="1rem"
      size="16px"
      onClick={onClose}
      cursor="pointer"
    />


    </Modal>
  )
}

export default NetflixModal;
