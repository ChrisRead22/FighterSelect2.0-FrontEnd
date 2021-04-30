import React from 'react';
import NewFighterForm from './NewFighterForm';
import FighterCard from './FighterCard';
import { useState } from 'react';
import {useParams} from 'react-router-dom'

const FighterContainer = ({fighers}) => {

    let {id}= useParams();
    return (<div>{id}</div>)

}







export default FighterContainer;