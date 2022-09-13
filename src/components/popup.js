import React from 'react'

const popup = ({close, CONTRACT_ADDRESS, mints}) => {

const mint=mints.length
  return (
    <div>
        <p>You have successfully minted a domain.</p>
        <a className="link" href={`https://testnets.opensea.io/assets/mumbai/${CONTRACT_ADDRESS}/${mint.id}`} target="_blank" rel="noopener noreferrer">
			 <p className="underlined">You can check your domain NFT through this link</p>
		</a>
    </div>
  )
}

export default popup
