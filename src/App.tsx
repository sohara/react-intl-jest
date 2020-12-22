import React, { FunctionComponent } from "react";
import { FormattedMessage, IntlProvider } from "react-intl";

export const App: FunctionComponent = () => {
  return (
    <>
      <IntlProvider locale="en" messages={{}}>
        <h1>Hello from React</h1>
        <p>
          <FormattedMessage
            defaultMessage="This is a translated paragraph."
            description="App paragraph"
          />
        </p>
      </IntlProvider>
    </>
  );
};
