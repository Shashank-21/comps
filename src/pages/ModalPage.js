import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <Button primary onClick={handleClose}>
      I accept
    </Button>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here's an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div>
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel mi vel
        ex tempor blandit et et quam. Suspendisse potenti. Integer sollicitudin
        rhoncus lorem, at feugiat neque ullamcorper aliquet. Praesent viverra
        velit id ex auctor, eu suscipit felis tincidunt. Pellentesque at arcu ut
        odio varius pulvinar. Phasellus non scelerisque nisl. Aenean tempor
        pulvinar ultrices. Nam lacinia faucibus velit eget aliquet. Donec
        posuere vitae tellus vitae gravida. Vestibulum sit amet ante finibus
        felis vulputate pellentesque eu non sapien. Aliquam vel semper eros, et
        auctor felis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel mi vel
        ex tempor blandit et et quam. Suspendisse potenti. Integer sollicitudin
        rhoncus lorem, at feugiat neque ullamcorper aliquet. Praesent viverra
        velit id ex auctor, eu suscipit felis tincidunt. Pellentesque at arcu ut
        odio varius pulvinar. Phasellus non scelerisque nisl. Aenean tempor
        pulvinar ultrices. Nam lacinia faucibus velit eget aliquet. Donec
        posuere vitae tellus vitae gravida. Vestibulum sit amet ante finibus
        felis vulputate pellentesque eu non sapien. Aliquam vel semper eros, et
        auctor felis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel mi vel
        ex tempor blandit et et quam. Suspendisse potenti. Integer sollicitudin
        rhoncus lorem, at feugiat neque ullamcorper aliquet. Praesent viverra
        velit id ex auctor, eu suscipit felis tincidunt. Pellentesque at arcu ut
        odio varius pulvinar. Phasellus non scelerisque nisl. Aenean tempor
        pulvinar ultrices. Nam lacinia faucibus velit eget aliquet. Donec
        posuere vitae tellus vitae gravida. Vestibulum sit amet ante finibus
        felis vulputate pellentesque eu non sapien. Aliquam vel semper eros, et
        auctor felis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel mi vel
        ex tempor blandit et et quam. Suspendisse potenti. Integer sollicitudin
        rhoncus lorem, at feugiat neque ullamcorper aliquet. Praesent viverra
        velit id ex auctor, eu suscipit felis tincidunt. Pellentesque at arcu ut
        odio varius pulvinar. Phasellus non scelerisque nisl. Aenean tempor
        pulvinar ultrices. Nam lacinia faucibus velit eget aliquet. Donec
        posuere vitae tellus vitae gravida. Vestibulum sit amet ante finibus
        felis vulputate pellentesque eu non sapien. Aliquam vel semper eros, et
        auctor felis.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel mi vel
        ex tempor blandit et et quam. Suspendisse potenti. Integer sollicitudin
        rhoncus lorem, at feugiat neque ullamcorper aliquet. Praesent viverra
        velit id ex auctor, eu suscipit felis tincidunt. Pellentesque at arcu ut
        odio varius pulvinar. Phasellus non scelerisque nisl. Aenean tempor
        pulvinar ultrices. Nam lacinia faucibus velit eget aliquet. Donec
        posuere vitae tellus vitae gravida. Vestibulum sit amet ante finibus
        felis vulputate pellentesque eu non sapien. Aliquam vel semper eros, et
        auctor felis.
      </p>
    </div>
  );
}

export default ModalPage;
