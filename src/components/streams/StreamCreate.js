import React from 'react';
import {Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
    renderError({error,touched}){
        if(touched && error){
            return (
                <div className="ui error message">
                <div className="header">{error}</div>
                </div>
            );
        }
    }
    renderInput = ({input, label,meta}) => {
        console.log(meta);
        const className = `field ${meta.error && meta.touched ? `error`: ``}`;
        return (
            <div className={className}>
            <label>{label}</label>
            <input {...input} />
            {this.renderError(meta)}
            </div>
        );
    }

    onSubmit(formValues){
        console.log(formValues);
    }
    render(){
        console.log(this.props)
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field 
                name="Title" 
                component={this.renderInput} 
                label="Enter Title" />
                <Field 
                name="Description" 
                component={this.renderInput} 
                label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>
            );
    }
};

const validate = (formValues) => {
    const errors = {};

    if(!formValues.Title){
        //empty values
        errors.Title = "You must enter title";
    }
    if(!formValues.Description){
        errors.Description = "You must enter Description";
    }
    return errors;
};

export default reduxForm({
    form: 'StreamCreate',
    validate
})(StreamCreate);