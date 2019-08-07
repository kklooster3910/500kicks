import React from 'react';
import { withRouter } from 'react-router';

class PhotoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { title: '', body: '', photoFile: null, photoUrl: null }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    };

    handleFile(e) {
        const file = e.target.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({photoFile: file, photoUrl: fileReader.result});
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    };

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('photo[title]', this.state.title);
        formData.append('photo[description]', this.state.description);
        formData.append('photo[photo]', this.state.photoFile);
        formData.append('photo[photographer_id]', this.props.currentUser.id);
        this.props.uploadPhoto(formData).then( () => (
            this.props.history.push(`/users/${this.props.currentUser.id}`))
        );
    };
    
//     componentDidMount() {
//     };
    
//     componentDidUpdate() {        
//    };

    update(field) {
        return e => {
            this.setState({[field]: e.target.value})
            this.props.resetErrors();
        };
    };
    
    render() {
        // let errors = Object.values(this.props) make sure you implement error
        //handling on the back end as well
        // you need to implment it for photo show pages, index pages
        // maybe add some errors for @ not being there in email
        let errors = Object.values(this.props.errors);
        if (errors.length > 0) {
            errors = errors.map( (err, i) => (
                <li key={i}>{err}</li>
            ));
        };
    
        const preview = this.state.photoUrl ? <img className='image-preview' src={this.state.photoUrl} /> : <img className='image-preview' height='540px' width='540px' />;

        return(
            <div>
                <div className='photoupload-form-img'></div>
                <form className='photoupload-form' onSubmit={this.handleSubmit}>
                    <div className='photoupload-form-content-container'>
                        <h2 className='photoupload-form-header'>Upload Your Kix</h2>
                        <input type='text'
                            value={this.state.title}
                            onChange={this.update('title')}
                            className='photupload-title-input'
                            placeholder='Photo Title!'/>
                        <textarea 
                            name='description' cols='30' rows='10'
                            value={this.state.description}
                            onChange={this.update('description')}
                            className='photupload-description-input'
                            placeholder='Photo Description Here'>
                        </textarea>
                        <input type='file'
                            className='photofile-upload-input'
                            onChange={this.handleFile}/>
                        <p className='photoupload-form-errors'>{errors}</p>
                    </div>   
                    <button className='postkix-btn'>Post Kix!</button>
                </form>
                    <div className='image-preview-container'>
                        <h3 className='image-preview-title'>Image Preview</h3>
                        <div className='image-border'>{preview}</div>
                    </div> 
            </div>
        )
    }
};


export default withRouter(PhotoForm);