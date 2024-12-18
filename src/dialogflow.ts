import { SessionsClient } from "@google-cloud/dialogflow-cx";

// 프로젝트 ID, 위치 ID, 에이전트 ID를 Dialogflow CX 콘솔에서 확인합니다.
const projectId = "qnacom-service";
const locationId = "global";
const agentId = "86920b8a-744d-4e24-8b2d-6d9a6ba8aac6";

//name = "projects/qnacom-service/locations/global/agents/58afd3df-2c0b-4de7-902e-d3bb1c8f9591"
// Gyeonggi Library Dialogflow
//name = "projects/qnacom-service/locations/global/agents/86920b8a-744d-4e24-8b2d-6d9a6ba8aac6"

// 서비스 계정 키 파일 경로를 지정합니다.
const credentialsPath = "/Users/seongjungkim/Development/python/datacollector/credentials/qnacom-service-94f96c83a4e3.json";

// SessionsClient를 초기화합니다.
//const client = new SessionsClient({ credentials: require(credentialsPath) });
const client = new SessionsClient();

// 세션 경로를 구성합니다.
const sessionId = Math.random().toString(36).substring(7);
const sessionPath = client.projectLocationAgentSessionPath(
  projectId,
  locationId,
  agentId,
  sessionId
);

// 텍스트 쿼리를 생성합니다.
const request = {
  session: sessionPath,
  queryInput: {
    text: {
      text: "안녕하세요",
    },
    languageCode: "ko",
  },
};

// DetectIntent 메서드를 사용하여 쿼리를 보냅니다.
const [response] = await client.detectIntent(request);

/*
src/dialoglfow.ts:39:20 - error TS1378: Top-level 'await' expressions are only allowed 
when the 'module' option is set to 'es2022', 'esnext', 'system', 'node16', 'nodenext', or 'preserve', and the 'target' option is set to 'es2017' or higher.
39 const [response] = await client.detectIntent(request);
*/

// 응답에서 텍스트를 추출합니다.
const responseText = response.queryResult?.responseMessages?.[0]?.text?.text?.[0];

console.log(`Dialogflow CX 응답: ${responseText}`);