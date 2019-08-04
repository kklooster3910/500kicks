import React from 'react';
import { withRouter } from 'react-router';

class PhotoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            photoFile: null,
            //other stuffs to go here
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    };

    handleFile(e) {
        this.setState({photoFile: e.target.files[0]});
    };

    handleSubmit(e) {
        e.preventDefault();
        debugger;
        const formData = new FormData();
        formData.append('photo[title]', this.state.title);
        formData.append('photo[photo]', this.state.photoFile);
        this.props.uploadPhoto(formData).then( () => (
            this.props.history.push(`/users/${this.props.currentUser.id}`))
        );
    };
    
    // componentDidMount() {
    //     this.props.resetErrors();
    // };


    update(field) {
        return e => {
            this.setState({[field]: e.target.value})
        };
    };

    render() {
        console.log(this.state)
        // let errors = Object.values(this.props) make sure you implement error
        //handling on the back end as well
        // you need to implment it for photo show pages, index pages
        // maybe add some errors for @ not being there in email
        return(
            <div>
                <form className='photoupload-form' onSubmit={this.handleSubmit}>
                    <div className='photoupload-form-content-container'>
                        <h2 className='photoupload-form-header'>Upload Your Kix</h2>
                            <input type='text'
                                value={this.state.title}
                                onChange={this.update('title')}
                                className='photupload-title-input'
                                placeholder='Photo Title!'/>
                            <input type="file"
                                onChange={this.handleFile}
                            />    
                    </div>
                    <button>Post Kix!</button>
                </form>
            </div>
        )
    }
};


export default withRouter(PhotoForm);