import React from 'react';
import '../../styles/application.css';

export const CreateOrEditService = (props: any) => {

    console.log(window.location.pathname);
    console.log(props.match.params.id);

    return(
        <div className={'content'}>This is a placeholder for creatinng or editing services registered in kong</div>
    )
}