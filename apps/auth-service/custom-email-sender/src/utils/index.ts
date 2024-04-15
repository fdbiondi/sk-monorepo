type CustomEmailSender = {
  triggerSource: 'CustomEmailSender_AdminCreateUser';
  request: {
    code: string;
    userAttributes: {
      sub: string;
      email: string;
    };
  };
};

export const isCustomEmailSender = (event: any): event is CustomEmailSender => {
  return event.request && typeof event.request.code === 'string';
};
