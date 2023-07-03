import { ConnectButton } from "web3uikit";

function Header() {
  return (
    <div className="p-5 border-b-2 flex flex-row">
      <h1 className="py-4 px-4 front-blog text-3xl">Decentralised Raffle</h1>
      <div className="ml-auto py-2 px-4"></div>
      <ConnectButton/>
    </div>
  )
}

export default Header
