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
  Grommet,
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

            <FormField label="참여 가능 여부" margin={{ top: '48px' }}>
              <RadioButtonGroup
                name="attend"
                options={['가능', '대기', '불가']}
              />
            </FormField>

            <FormField
              id="nickname"
              type="text"
              name="nickname"
              label="닉네임"
              placeholder="ex) 열정맨"
              required={true}
            />

            <FormField
              id="summary"
              name="summary"
              label="프로젝트 요약"
              placeholder="프로젝트를 간단히 요약해서 알려주세요."
              required={true}
            />

            <FormField
              id="description"
              name="description"
              label="프로젝트 설명"
              required={true}
            >
              <TextArea placeholder="프로젝트를 상세히 설명해주세요." />
            </FormField>

            <FormField
              id="projectType"
              name="projectType"
              label="프로젝트 타입"
              required={true}
              margin={{ top: '48px' }}
            >
              <CheckBoxGroup options={['프로젝트', '스터디']} />
            </FormField>

            <FormField
              id="skill"
              name="skill"
              label="필요한 스킬"
              required={true}
              margin={{ top: '48px' }}
            >
              <CheckBoxGroup
                options={['기획', '개발', '마케팅', '디자인', '기타']}
              />
            </FormField>

            <FormField
              id="status"
              name="status"
              label="프로젝트 진행 상태"
              required={true}
              margin={{ top: '48px' }}
            >
              <Select
                options={['시작 전', '초반', '중반', '완료']}
                defaultValue="시작 전"
              />
            </FormField>

            <FormField
              id="experience"
              name="experience"
              label="관련 경험"
              margin={{ top: '48px' }}
            >
              <TextArea placeholder="관련된 경험이 있다면 알려주세요." />
            </FormField>

            <FormField
              id="contact"
              name="contact"
              label="참여 연락 수단"
              required={true}
              margin={{ top: '48px' }}
            >
              <TextArea placeholder="프로젝트에 참여하기 위한 연락 수단을 알려주세요. (ex.이메일)" />
            </FormField>

            <FormField
              id="reference"
              name="reference"
              label="참고 링크"
              margin={{ top: '48px' }}
            >
              <TextArea placeholder="프로젝트에 참여 전 참고할만한 링크를 알려주세요. (ex.나의 프로필, 진행중인 프로젝트 링크 등)" />
            </FormField>

            <Button
              type="submit"
              label="완료"
              primary={true}
              margin={{ top: '48px' }}
              size="large"
              fill
            />
          </Form>
        </div>
      )}
    </ResponsiveContext.Consumer>
  );
}

export default Edit;
