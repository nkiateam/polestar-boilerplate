import React from 'react';
import { Modal, message } from 'antd';
import TryCatch from 'react-try-catch';
import { Box, Header, Footer, Button, Grid, Form } from 'polestar-ui-kit';

const { GridBox, FormBox } = Box;
const { GridHeader, FormHeader } = Header;
const { FormFooter } = Footer;
const { AntForm } = Form;
const { AgGrid } = Grid;

class ExecSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
    }

    doRegist = () => {
        console.info(this.form);
        const _this = this;
        this.form.props.form.validateFields((error, value) => {
            if ( !error) {
                if( Modal.confirm({
                        title: 'Confirm',
                        content: '저장하시겠습니까?',
                        okText: '저장',
                        cancelText: '취소',
                    }) ){
                    setTimeout(
                        function(){
                            message.info('저장되었습니다');
                            _this.handleCancel();
                        }, 2000
                    );
                }



            }else{
                message.error('필수 입력을 확인하십시오.');
            }
        });
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
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
                <FormBox>
                    <FormHeader title={'주소 등록'} />
                    <AntForm
                        wrappedComponentRef={(form) => {
                            this.form = form;
                        }}
                        schema={{
                            group: {
                                title: '그룹 헤더 테스트',
                                style: {
                                    color: 'blue',
                                }
                            },
                            fields: [
                                [{
                                    type: 'text',
                                    id: 'user_name',
                                    label: '지명',
                                    required: false,
                                }], [{
                                    type: 'text',
                                    id: 'user_name1',
                                    label: '지번',
                                    required: false,
                                }, {
                                    type: 'text',
                                    id: 'user_name3',
                                    label: '주민대표',
                                    required: true,
                                }, {
                                    type: 'email',
                                    id: 'user_name2',
                                    label: '주민대표 이메일',
                                    required: true,
                                }], [{
                                    type: 'textarea',
                                    id: 'dept',
                                    label: '비고',
                                    required: false,
                                }],
                            ],
                        }}
                    />
                    <AntForm
                        wrappedComponentRef={(form) => {
                            this.form2 = form;
                        }}
                        schema={{
                            group: {
                                title: '그룹 헤더 테스트 #2',
                                style: {
                                    color: 'blue',
                                }
                            },
                            fields: [
                                [{
                                    type: 'text',
                                    id: 'user_name',
                                    label: '지명',
                                    required: false,
                                },{
                                    type: 'text',
                                    id: 'user_name10',
                                    label: '지번#2',
                                    required: true,
                                },], [{
                                    type: 'text',
                                    id: 'user_name1',
                                    label: '지번',
                                    required: false,
                                }, {
                                    type: 'text',
                                    id: 'user_name3',
                                    label: '주민대표',
                                    required: true,
                                }, {
                                    type: 'email',
                                    id: 'user_name2',
                                    label: '주민대표 이메일',
                                    required: true,
                                }], [{
                                    type: 'textarea',
                                    id: 'dept',
                                    label: '비고',
                                    required: false,
                                }],
                            ],
                        }}
                    />
                    <AntForm
                        wrappedComponentRef={(form) => {
                            this.form3 = form;
                        }}
                        schema={{
                            group: {
                                title: '그룹 헤더 테스트 #2',
                                style: {
                                    color: 'blue',
                                }
                            },
                            fields: [
                                [{
                                    type: 'text',
                                    id: 'user_name',
                                    label: '지명',
                                    required: false,
                                }],[{
                                    type: 'text',
                                    id: 'user_name10',
                                    label: '지번#2',
                                    required: true,
                                },], [{
                                    type: 'text',
                                    id: 'user_name1',
                                    label: '지번',
                                    required: false,
                                }], [{
                                    type: 'text',
                                    id: 'user_name3',
                                    label: '주민대표',
                                    required: true,
                                }, {
                                    type: 'email',
                                    id: 'user_name2',
                                    label: '주민대표 이메일',
                                    required: true,
                                }], [{
                                    type: 'textarea',
                                    id: 'dept',
                                    label: '비고',
                                    required: false,
                                }],
                            ],
                        }}
                    />
                    <FormFooter buttons={[
                        <Button icon={'plus'} onClick={this.doRegist}>등록</Button>,
                        <Button icon={'delete'}>취소</Button>,
                    ]}
                    />
                </FormBox>
            </TryCatch>

        );
    }
}

export default ExecSearch;