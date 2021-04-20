import { useState } from 'react';
import { Heading, Form, FormField, Button, CheckBoxGroup } from 'grommet';
import Head from 'next/head';

function Edit() {
  const [errorMsg, setErrorMsg] = useState('');

  function handleSubmit() {
    console.log('submit');
  }
  return (
    <>
      <Head>
        <title>프로젝트 생성하기</title>
      </Head>
      <Form
        onSubmit={handleSubmit}
        style={{ maxWidth: '600px', margin: '0 auto' }}
      >
        <Heading level="2" margin={{ vertical: '24px' }} fill>
          작성하기
        </Heading>
        {errorMsg ? <p style={{ color: 'red' }}>{errorMsg}</p> : null}
        {/* 닉네임 */}
        <FormField
          id="nickname"
          type="text"
          name="nickname"
          label="닉네임"
          required={true}
          margin={{ top: '48px' }}
        />

        {/* 요약 */}
        <FormField
          id="summary"
          type="password"
          name="summary"
          label="프로젝트 요약"
          required={true}
          margin={{ top: '48px' }}
        />

        {/* 설명 */}
        <FormField
          id="description"
          type="text"
          name="description"
          label="프로젝트 설명"
          required={true}
          margin={{ top: '48px' }}
        />

        {/* 타입 */}
        <FormField
          id="projectType"
          name="projectType"
          label="프로젝트 타입"
          required={true}
          margin={{ top: '48px' }}
        >
          <CheckBoxGroup options={['Maui', 'Kauai', 'Oahu']} />
        </FormField>

        {/* 진행 상태 */}
        <FormField
          id="projectStatus"
          name="projectStatus"
          label="프로젝트 진행 상태"
          required={true}
          margin={{ top: '48px' }}
        >
          <Select options={['small', 'medium', 'large']} />
        </FormField>

        {/* 현재 인원 */}
        <FormField
          id="projectStatus"
          name="projectStatus"
          label="프로젝트 현재 인원"
          required={true}
          margin={{ top: '48px' }}
        >
          <TextArea
            placeholder="현재 프로젝트에 참여중인 사람들을 알려주세요."
            value={value}
            onChange={(event) => setValue(event.target.value)}
            focusIndicator
          />
        </FormField>

        {/* 목표 */}
        <FormField
          id="projectStatus"
          name="projectStatus"
          label="프로젝트 목표"
          required={true}
          margin={{ top: '48px' }}
        >
          <TextArea
            placeholder="이 프로젝트의 목표를 알려주세요."
            value={value}
            onChange={(event) => setValue(event.target.value)}
            focusIndicator
          />
        </FormField>

        {/* 참여 연락 수단 */}
        <FormField
          id="projectStatus"
          name="projectStatus"
          label="참여 연락 수단"
          required={true}
          margin={{ top: '48px' }}
        >
          <TextArea
            placeholder="프로젝트에 참여하기 위한 연락 수단을 알려주세요. (ex.이메일)"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            focusIndicator
          />
        </FormField>

        {/* 참고 링크 */}
        <FormField
          id="projectStatus"
          name="projectStatus"
          label="참고 링크"
          margin={{ top: '48px' }}
        >
          <TextArea
            placeholder="프로젝트에 참여 전 참고할만한 링크를 알려주세요. (ex.나의 프로필, 진행중인 프로젝트 링크 등)"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            focusIndicator
          />
        </FormField>

        <Heading level="3" margin={{ vertical: '24px' }} fill>
          이런 분을 찾고 있어요.
        </Heading>

        {/* 참여 가능 여부 */}
        <FormField
          id="projectStatus"
          name="projectStatus"
          label="참여 가능 여부"
          margin={{ top: '48px' }}
        >
          <RadioButtonGroup
            name="doc"
            options={['one', 'two']}
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
        </FormField>

        {/* 관련 경험 */}
        <FormField
          id="projectStatus"
          name="projectStatus"
          label="관련 경험"
          margin={{ top: '48px' }}
        >
          <TextArea
            placeholder="이 프로젝트와 관련된 경험을 알려주세요."
            value={value}
            onChange={(event) => setValue(event.target.value)}
            focusIndicator
          />
        </FormField>

        {/* 필요 스킬 */}
        <FormField
          id="projectType"
          name="projectType"
          label="필요한 스킬"
          required={true}
          margin={{ top: '48px' }}
        >
          <CheckBoxGroup options={['Maui', 'Kauai', 'Oahu']} />
        </FormField>
        <FormField
          id="projectStatus"
          name="projectStatus"
          label="프로젝트 구성원 수"
          margin={{ top: '48px' }}
        >
          <RadioButtonGroup
            name="doc"
            options={['one', 'two']}
            value={value}
            onChange={(event) => setValue(event.target.value)}
          />
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
    </>
  );
}

export default Edit;
