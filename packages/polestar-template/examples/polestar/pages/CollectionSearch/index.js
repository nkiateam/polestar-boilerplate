import React from 'react';
import TryCatch from 'react-try-catch';

import { Box, Header, Button, Grid } from 'polestar-ui-kit';

const { GridBox } = Box;
const { GridHeader } = Header;

const { AgGrid } = Grid;

class CollectionSearch extends React.Component {
    constructor(props) {
        super(props);
    }

    doRegist = () => {
        alert('등록 버튼');
    }

    createColumnDefs = () => [
        {
            headerName: '순번',
            width: 50,
            field: 'ROWNUM',
        },
        {
            headerName: '년월',
            width: 100,
            field: 'STD_YM',
        },
        {
            headerName: 'ID',
            width: 200,
            field: 'id',
        },
        {
            headerName: '주소',
            field: 'PNU_NAME',
        },
    ]

    render() {
        return (
            <TryCatch>
                <GridBox>
                    <GridHeader
                        title="제주도 주소"
                        showExcelButton
                        showSearchButton={false}
                        showRefreshButton
                        buttons={[
                            <Button icon={'plus'} onClick={this.doRegist}>등록</Button>,
                            <Button icon={'delete'}>삭제</Button>,
                        ]}
                        secondButtons={[
                            <Button>Second #1</Button>,
                            <Button>Second #2</Button>,
                            <Button>Second #3</Button>,
                        ]}
                    />
                    <Grid.AgGrid
                        _requestUrl={'http://192.168.232.211:9999/grid/performance/getData'}
                        _reqeustRowsFilterKey={'rows'}
                        _requestTotalFilterKey={'total'}
                        _enableInfinite={false}
                        columnDefs={this.createColumnDefs()}
                        onGridReady={this.onGridReady}
                    />
                </GridBox>
            </TryCatch>
        );
    }
}

export default CollectionSearch;