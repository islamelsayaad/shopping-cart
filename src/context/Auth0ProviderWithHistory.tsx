import { Auth0Provider } from "@auth0/auth0-react";

interface Auth0ProviderWithHistoryProps {
  children: React.ReactNode;
}

function Auth0ProviderWithHistory({ children }: Auth0ProviderWithHistoryProps) {
  return (
    <Auth0Provider
      domain={"dev-k4e702lgw8acjcwy.us.auth0.com"}
      clientId={"bUuKD6dgApxJLqA1xGrSDAmcMyzFdhOS"}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      {children}
    </Auth0Provider>
  );
}

export default Auth0ProviderWithHistory;
