import { SessionsClient } from '@google-cloud/dialogflow-cx';

// 프로젝트 ID, 위치 ID, 에이전트 ID를 Dialogflow CX 콘솔에서 확인합니다.
const projectId = "qnacom-service";
const location = "global";
const agentId = "86920b8a-744d-4e24-8b2d-6d9a6ba8aac6";
const sessionId = '123456';
const languageCode = 'en';

const sessionPath = `projects/${projectId}/locations/${location}/agents/${agentId}/sessions/${sessionId}`;

export const detectIntent = async (text: string): Promise<void> => {
  const client = new SessionsClient();

  const request = {
    session: sessionPath,
    queryInput: {
      text: {
        text,
      },
      languageCode,
    },
  };

  try {
    const [response] = await client.detectIntent(request);
    console.log('Detected Intent:');
    console.log(JSON.stringify(response, null, 2));
  } catch (error) {
    console.error('Error detecting intent:', error);
  }
};

detectIntent("안녕");