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
    
    console.log(sponsors);

    return (
        <>
            {/* <p>후원자 목록 조회..할건데 후원자가 없습니당</p> */}

            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">이름</th>
                    <th scope="col">주소</th>
                    <th scope="col">전화번호</th>
                    <th scope="col">선택 옵션</th>
                    <th scope="col">수량</th>
                    <th scope="col">배송 요청사항</th>
                    <th scope="col">배송 요청사항</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
            </table>

            {/* {
                sponsors.map((sponsor) =>{
                    return (
                        <>
                            <p>후원금액{sponsor.amount}</p>
                            <p>후원수량{sponsor.quantity}</p>
                            <p>수령인 주소{sponsor.recipientAddress}</p>
                            <p>수령인 이름{sponsor.recipientName}</p>
                            <p>수령인 전화번호{sponsor.recipientTel}</p>
                            <p>배송 요청사항{sponsor.requestContent}</p>
                            <p>선택한 옵션{sponsor.rewardName}</p>
                        </>
                    )
                })
            } */}
        </>
    );
}

export default ProjectSponsorList;