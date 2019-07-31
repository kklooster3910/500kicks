import React from 'react';

// class Home extends React.Component {
//     constructor(props){
//         super(props);
//     };

const Home = props => {
    return (
        <div className='home'>
            <h4>Share Your Kix...</h4>
            <div className='home-img-container'>
                <img src="https://images.unsplash.com/photo-1488885064048-f182e4985f98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80" 
                alt=""/>
            </div>
        </div>

    );
}    

export default Home;