import styled from 'styled-components';
import { Table } from 'react-bootstrap';
import { IonIcon } from '@ionic/react';
import { downloadOutline } from 'ionicons/icons';
import { useState } from 'react';
import LiveBadge from '../../../Home/Badge';

const MyTable = styled(Table)`
    text-align: center;
    background-color: #F9F9F9;
`;

const Icon = styled(IonIcon)`
    font-size: 18px;
`;

function LiveList(){
    const [lives, setLives] = useState([
        {
            id: 0,
            title: "라이브1" 
        },
        {
            id: 1,
            title: "라이브2" 
        },
        {
            id: 2,
            title: "라이브3" 
        },
        {
            id: 3,
            title: "라이브4" 
        },
    ]);

    return(
        <MyTable  hover>
            <thead>
                <tr>
                <th>No.</th>
                <th>제목</th>
                <th>다운로드</th>
                </tr>
            </thead>
            <tbody>
                {lives.map((live)=>(
                    <tr>
                        <td>{live.id+1}</td>
                        <td>{live.title}</td>
                        <td><Icon icon={downloadOutline} onClick={()=>{alert('다운로드')}}></Icon></td>
                    </tr>
                ))}
            </tbody>
        </MyTable>
    );
}

export default LiveList;