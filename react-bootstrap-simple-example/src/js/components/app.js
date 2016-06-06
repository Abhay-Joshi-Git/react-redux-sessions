import React from 'react';
import { PageHeader, Panel, Button, Alert, Modal } from 'react-bootstrap/lib';
import styles from '../../styles/container.scss';
import classnames from 'classnames';

export default class App extends React.Component {
    constructor() {
        super();

        this.state = {
            modalClose: false
        }
    }

    render() {
        return (
            <div className='container'>

                <Modal show={!this.state.modalClose} onHide={() => {
                        this.setState({
                            modalClose: !this.state.modalClose
                        })
                    }}>
                        <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h4>Text in a modal</h4>
                        </Modal.Body>
                </Modal>


                <br />
                    <br />


                <div className='row'>

                    <Alert
                        bsStyle='danger'
                        onDismiss={() => {}}
                    >
                    TEST
                    </Alert>

                        <Panel className={classnames('col-sm-6', styles.leftContainer)} >
                            I s'd be at the left side
                        </Panel>

                        <Panel className='col-sm-6'>
                            I s'd be at the right side
                        </Panel>

                </div>

                <br />


                <Button
                    bsStyle='primary'
                    onClick={() => {
                        this.setState({
                            modalClose: !this.state.modalClose
                        })
                    }}
                > Show/Hide Modal </Button>

            </div>
        );

    }
}
