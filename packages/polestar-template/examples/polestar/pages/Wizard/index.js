import React from 'react';
import TryCatch from 'react-try-catch';

import { Box, Header, Button, Grid, Form, Wizard, Footer } from 'polestar-ui-kit';

import './style/Wizard.less';

const { GridBox, FormBox } = Box;
const { GridHeader, FormHeader } = Header;
const { FormFooter } = Footer;
const { AntForm } = Form;
const { AgGrid } = Grid;

class WizardExample extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TryCatch>
                <Wizard>
                    <Wizard.Step title="장비탐색" description="입력된 정보로 장비를 탐색합니다.">
                        <FormBox>
                            <AntForm
                                wrappedComponentRef={(form) => {
                                    this.form = form;
                                }}
                                schema={{
                                    fields: [
                                        [{
                                            type: 'text',
                                            id: 'user_name',
                                            label: '장비명',
                                            required: false,
                                        }], [{
                                            type: 'text',
                                            id: 'user_name1',
                                            label: 'IP',
                                            required: false,
                                        }],
                                    ],
                                }}
                            />

                        </FormBox>
                    </Wizard.Step>
                    <Wizard.Step title="장비정보" description="관리에 필요한 추가적인 정보를 입력합니다.">
                        <AntForm
                            wrappedComponentRef={(form) => {
                                this.form = form;
                            }}
                            schema={{
                                fields: [
                                    [{
                                        type: 'text',
                                        id: 'user_name',
                                        label: '자산번호',
                                        required: false,
                                    },{
                                        type: 'text',
                                        id: 'user_name1',
                                        label: '시리얼번호',
                                        required: false,
                                    }, ], [{
                                        type: 'text',
                                        id: 'user_name3',
                                        label: '운영부서',
                                        required: true,
                                    }], [{
                                        type: 'email',
                                        id: 'user_name2',
                                        label: '담당자',
                                        required: true,
                                    }],
                                ],
                            }}
                        />
                    </Wizard.Step>
                    <Wizard.Step title="장비설정" description="장비 설정을 등록합니다.">
                        <AntForm
                            wrappedComponentRef={(form) => {
                                this.form = form;
                            }}
                            schema={{
                                fields: [
                                    [{
                                        type: 'text',
                                        id: 'user_name',
                                        label: '수집주기',
                                        required: false,
                                    }],[{
                                        type: 'text',
                                        id: 'user_name1',
                                        label: '알람설정',
                                        required: false,
                                    },]
                                ],
                            }}
                        />
                    </Wizard.Step>
                </Wizard>
            </TryCatch>
        );
    }
}

export default WizardExample;