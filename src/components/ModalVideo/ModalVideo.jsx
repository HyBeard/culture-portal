import React from 'react';
import ModalVideo from 'react-modal-video';
import Button from 'react-bootstrap/Button';
import { withTranslation } from 'react-i18next';

class Video extends React.Component {
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
      props: { t, videoId, start },
    } = this;

    const options = {
      start,
      color: 'white',
    };

    return (
      <section className="video-block">
        <ModalVideo isOpen={isOpen} videoId={videoId} youtube={options} onClose={closeModal} />
        <Button variant="primary" onClick={openModal}>
          {t('showVideo')}
        </Button>
      </section>
    );
  }
}

export default withTranslation()(Video);
