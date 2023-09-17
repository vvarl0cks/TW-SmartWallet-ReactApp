import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import {
  ThirdwebProvider,
  localWallet,
  paperWallet,
  smartWallet,
} from "@thirdweb-dev/react";
import "./styles/globals.css";
import { Sepolia } from "@thirdweb-dev/chains";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
export const activeChain = Sepolia;

export const smartWalletConfig = smartWallet({
  factoryAddress: "0xE08E7DF802F4ae7b1638FdC1395318449E12FB8c",
  gasless: true,
  personalWallets: [localWallet()],
});

export const editionDropAddress = "0xf82F9B02B6Ea144d1E08944dbbdECc610d54d343";
export const editionDropTokenId = "0";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <ThirdwebProvider
      clientId={import.meta.env.VITE_TEMPLATE_CLIENT_ID}
      activeChain={Sepolia}
      supportedWallets={[smartWalletConfig]}
    >
      <App />
    </ThirdwebProvider>
  </React.StrictMode>
);