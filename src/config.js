const config = {
    s3: {
      REGION: "eu-west-1",
      BUCKET: "bpn-app-upload",
    },
    apiGateway: {
      REGION: "eu-west-1",
      URL: "https://wv65k2yfrg.execute-api.eu-west-1.amazonaws.com/prod/",
    },
    cognito: {
      REGION: "eu-west-1",
      USER_POOL_ID: "eu-west-1_0ix0aRbjV",
      APP_CLIENT_ID: "12ndvq3e2si1au8g226t32jbsu",
      IDENTITY_POOL_ID: "eu-west-1:8f9f7c54-c8fd-4bfe-a23f-062af1076f04",
    },
  };
  
  export default config;