import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import { baseUrl } from '../../../../App';
import setAuthorizationToken from '../../../../atoms';

function ProjectSponsorList(){

    const { id } = useParams();
    const [sponsors, setSponsors] = useState();

    const getSponsors = async() => { 
        await axios.get( baseUrl + '/orders/projects/' + id, {headers: setAuthorizationToken()})
        .then((res) => { 
            console.log(res.data);
            setSponsors(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    useEffect(()=>{
        getSponsors();
    }, []);

    return (
        <>
        <p>후원자 목록 조회..할건데 후원자가 없습니당</p>
        </>
    );
}

export default ProjectSponsorList;