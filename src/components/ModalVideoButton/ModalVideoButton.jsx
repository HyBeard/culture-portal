import React from 'react';
import ModalVideo from 'react-modal-video';
import Button from 'react-bootstrap/Button';
import { withTranslation } from 'react-i18next';

class ModalVideoButton extends React.Component {
  state = {
    isOpen: false,
  };

  openModal = () => {
    this.setState({ isOpen: true });
  };

  closeModal = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const {
      state: { isOpen },
      openModal,
      closeModal,
      props: { t, videoId, start, className },
    } = this;

    const options = {
      start,
      color: 'white',
    };

    return (
      <>
        <ModalVideo isOpen={isOpen} videoId={videoId} youtube={options} onClose={closeModal} />
        <Button className={className} onClick={openModal}>
          {t('showVideo')}
        </Button>
      </>
    );
  }
}

export default withTranslation()(ModalVideoButton);
