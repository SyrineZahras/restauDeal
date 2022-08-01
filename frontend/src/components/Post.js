import React, { Component } from 'react';
import PDF from './PDF';
import './Post.css';

class Post extends Component {
    state = {
        email:'',
        num:'',
        postSubmitted: false
    }

    onChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    }

    sunmitPost = (e) => {
        
        if(!this.state.email || !this.state.num){
            alert('All fields are required!');
            e.preventDefault();
        }else{
            this.setState({
                postSubmitted: true
            });
        }
    }

    render(){
        return(
            <>
                {  !this.state.postSubmitted ? 
                    (<div className="container">
                        <div className="jumbotron mt-3">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="well well-sm">
                                        <form className="form-horizontal" method="post">
                                            <fieldset>
                                                <legend className="text-center header">Bienvenue</legend>
                                                <p>Veuillez remplir ces champs</p>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input onChange={this.onChange('email')} name="email" type="text" placeholder="Votre Email " className="form-control" />
                                                </div>
                                                <div className="form-group">
                                                    <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                    <input onChange={this.onChange('num')} name="num" type="text" placeholder="Votre Numéro " className="form-control" />
                                                </div>
                                                <div class="qrbox">
                                                <img src="./assets/images/qrCode.png" alt="qrCode" className="photo"/>
                                                </div>
                                                <div className="form-group">
                                                    <button type="button" onClick={this.sunmitPost} className="btn btn-primary btn-lg">Submit</button>
                                                </div>
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>) : (
                        <PDF email={this.state.email} num={this.state.num} />
                    )
                }
            </>
        );
    }
}

export default Post;