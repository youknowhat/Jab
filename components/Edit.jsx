import { useState } from 'react';
import {
  Heading,
  Form,
  FormField,
  Button,
  CheckBoxGroup,
  RadioButtonGroup,
  Select,
  TextArea,
  ResponsiveContext,
} from 'grommet';
import Head from 'next/head';

function Edit() {
  const [errorMsg, setErrorMsg] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    alert('submit');
  }
  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <div
          style={{
            backgroundColor: '#eee',
            padding: size !== 'small' ? '80px 0' : '16px',
          }}
        >
          <Head>
            <title>시작하기</title>
          </Head>
          <Form
            onSubmit={handleSubmit}
            style={
              size !== 'small'
                ? {
                    maxWidth: '600px',
                    margin: '0 auto',
                    backgroundColor: '#fff',
                    borderRadius: '10px',
                    width: '80%',
                    padding: '80px',
                  }
                : {
                    backgroundColor: '#fff',
                    borderRadius: '10px',
                    margin: '16px 0',
                    padding: '16px',
                    boxShadow: '0 8px 16px 10px rgb(0, 0, 0, 0.05)',
                  }
            }
          >
            <Heading level="2" margin={{ vertical: '24px' }}>
              이런 걸 해보려고 해요
            </Heading>

            <FormField label="참여 가능 여부">
              <RadioButtonGroup
                name="attend"
                options={['가능', '대기', '불가']}
              />
            </FormField>

            <FormField
              name="summary"
              label="프로젝트 요약"
              placeholder="프로젝트를 간단히 요약해서 알려주세요."
            />

            <FormField
              name="description"
              label="프로젝트 설명"
            >
              <TextArea placeholder="프로젝트를 상세히 설명해주세요." />
            </FormField>

            <FormField
              name="status"
              label="프로젝트 진행 상태"
            >
              <Select
                options={['시작 전', '초반', '중반', '완료']}
                defaultValue="시작 전"
              />
            </FormField>

            <FormField
              name="projectType"
              label="프로젝트 타입"
            >
              <CheckBoxGroup options={['프로젝트', '스터디']} />
            </FormField>

            <FormField
              name="skill"
              label="필요한 스킬"
            >
              <CheckBoxGroup
                options={['기획', '개발', '마케팅', '디자인', '기타']}
              />
            </FormField>

            <FormField
              name="contact"
              label="참여 연락 수단"
            >
              <TextArea placeholder="프로젝트에 참여하기 위한 연락 수단을 알려주세요. (ex.이메일)" />
            </FormField>

            <FormField
              name="reference"
              label="참고 링크"
            >
              <TextArea placeholder="프로젝트에 참여 전 참고할만한 링크를 알려주세요. (ex.나의 프로필, 진행중인 프로젝트 링크 등)" />
            </FormField>

            <Button
              type="submit"
              label="완료"
              size="large"
              margin="40px 0 0"
              primary
              fill
            />
          </Form>
        </div>
      )}
    </ResponsiveContext.Consumer>
  );
}

export default Edit;
