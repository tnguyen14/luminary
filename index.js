import React from 'https://esm.sh/react@18.3.1';
import { render } from 'https://esm.sh/react-dom@18.2.0';
import { Auth0Provider } from 'https://esm.sh/@auth0/auth0-react@2';

render(
    <Auth0Provider
      domain="tridnguyen.auth0.com"
      clientId="z3IK464A6PogdpKe0LY0vTaKr6izei2a"
      cacheLocation="localstorage"
      useRefreshTokens={true}
      useRefreshTokensFallback={true}
      authorizationParams={{
        redirect_uri: window.location.href,
        audience: "https://lists.cloud.tridnguyen.com",
        scope: "openid profile email"
      }}
    >
        <div>Hello World</div>
    </Auth0Provider>,
    document.querySelector(".main")
);