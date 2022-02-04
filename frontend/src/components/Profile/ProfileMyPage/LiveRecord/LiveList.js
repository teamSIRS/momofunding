import styled from 'styled-components';
import { Table } from 'react-bootstrap';
import { IonIcon } from '@ionic/react';
import { downloadOutline } from 'ionicons/icons';

const MyTable = styled(Table)`
    text-align: center;
    background-color: #F9F9F9;
`;

const Icon = styled(IonIcon)`
    font-size: 18px;
`;

function LiveList(){
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
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td><Icon icon={downloadOutline} onClick={()=>{alert('다운로드')}}></Icon></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Larry the Bird</td>
                    <td>@twitter</td>
                </tr>
            </tbody>
        </MyTable>
    );
}

export default LiveList;